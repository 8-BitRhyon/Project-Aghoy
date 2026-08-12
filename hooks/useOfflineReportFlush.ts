// hooks/useOfflineReportFlush.ts - wire the durable report queue's flush
// triggers. The queue (utils/reportQueue.ts) persists reports to IndexedDB
// BEFORE the network attempt and backs off with jitter; this hook is the
// part that actually delivers them:
//
//   - window 'online'    -> the WiFi came back, flush now
//   - visibilitychange   -> the app returned to the foreground, flush now
//   - 5-minute interval  -> while the app is open, keep retrying quietly
//
// Only sanitized (Rejects-layer) payloads ever enter the queue, and the
// Worker dedups on content_hash, so retries are idempotent. Flushing is
// additionally gated on the CURRENT consent state: if the user reset consent,
// queued reports must not keep POSTing with a revoked attestation (the Worker
// would 403 every attempt and the queue would drop them as permanent).

import { useEffect } from 'react';
import { flushQueuedReports } from '../src/api/storageClient';

const FLUSH_INTERVAL_MS = 5 * 60 * 1000;
const CONSENT_KEY = 'aghoy_privacy_consent';

const hasConsent = (): boolean => {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'granted';
  } catch {
    return false;
  }
};

const useOfflineReportFlush = (): void => {
  useEffect(() => {
    const flush = () => {
      if (!hasConsent()) return;
      void flushQueuedReports();
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') flush();
    };
    window.addEventListener('online', flush);
    document.addEventListener('visibilitychange', onVisibility);
    const timer = window.setInterval(flush, FLUSH_INTERVAL_MS);
    return () => {
      window.removeEventListener('online', flush);
      document.removeEventListener('visibilitychange', onVisibility);
      window.clearInterval(timer);
    };
  }, []);
};

export default useOfflineReportFlush;
