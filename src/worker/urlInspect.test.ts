import { describe, it, expect } from 'vitest';
import { isPrivateIp, extractTitle, validateInspectUrl } from './urlInspect';

describe('isPrivateIp', () => {
  it('flags private ranges', () => {
    expect(isPrivateIp('10.0.0.1')).toBe(true);
    expect(isPrivateIp('192.168.1.1')).toBe(true);
    expect(isPrivateIp('172.16.0.1')).toBe(true);
    expect(isPrivateIp('172.31.255.255')).toBe(true);
    expect(isPrivateIp('127.0.0.1')).toBe(true);
    expect(isPrivateIp('169.254.169.254')).toBe(true);
    expect(isPrivateIp('::1')).toBe(true);
    expect(isPrivateIp('fe80::1')).toBe(true);
    expect(isPrivateIp('fc00::1')).toBe(true);
  });

  it('allows public IPs', () => {
    expect(isPrivateIp('8.8.8.8')).toBe(false);
    expect(isPrivateIp('1.1.1.1')).toBe(false);
    expect(isPrivateIp('104.18.25.60')).toBe(false);
  });

  it('tolerates bracket wrapping and whitespace', () => {
    expect(isPrivateIp('[::1]')).toBe(true);
    expect(isPrivateIp(' 10.0.0.5 ')).toBe(true);
  });
});

describe('extractTitle', () => {
  it('extracts a plain title', () => {
    expect(extractTitle('<html><head><title>Verify Your Account</title></head></html>')).toBe('Verify Your Account');
  });

  it('strips inner tags and collapses whitespace', () => {
    expect(extractTitle('<title>GCash <b>Alert</b>  -  Login</title>')).toBe('GCash Alert - Login');
  });

  it('returns empty when absent', () => {
    expect(extractTitle('<html><body>no title</body></html>')).toBe('');
  });

  it('caps length', () => {
    const long = `<title>${'x'.repeat(500)}</title>`;
    expect(extractTitle(long).length).toBeLessThanOrEqual(200);
  });
});

describe('validateInspectUrl - static rejections (no network)', () => {
  it('rejects non-http(s) protocols', async () => {
    await expect(validateInspectUrl('file:///etc/passwd')).rejects.toThrow(/http/);
    await expect(validateInspectUrl('ftp://example.com')).rejects.toThrow(/http/);
    await expect(validateInspectUrl('javascript:alert(1)')).rejects.toThrow(/http/);
  });

  it('rejects malformed URLs', async () => {
    await expect(validateInspectUrl('not a url')).rejects.toThrow(/Invalid URL/);
    await expect(validateInspectUrl('')).rejects.toThrow(/Invalid URL/);
  });

  it('rejects URLs with embedded credentials', async () => {
    await expect(validateInspectUrl('https://user:pass@evil.example')).rejects.toThrow(/credentials/);
  });

  it('rejects blocked internal hostnames before DNS', async () => {
    await expect(validateInspectUrl('http://localhost:8080/admin')).rejects.toThrow(/blocked/);
    await expect(validateInspectUrl('https://metadata.google.internal/')).rejects.toThrow(/blocked/);
    await expect(validateInspectUrl('http://169.254.169.254/latest/meta-data/')).rejects.toThrow(/blocked/);
    await expect(validateInspectUrl('http://100.100.100.200/latest/meta-data/')).rejects.toThrow(/blocked/);
    await expect(validateInspectUrl('http://intranet.internal/')).rejects.toThrow(/blocked/);
  });

  it('rejects hostnames that resolve only to private IPs (DNS guard)', async () => {
    // myrouter.local-style hosts cannot be DNS-resolved to a public IP; if the
    // hostname does not resolve at all the URL is rejected as unresolvable.
    await expect(validateInspectUrl('https://test.internal.example')).rejects.toThrow();
  });
});
