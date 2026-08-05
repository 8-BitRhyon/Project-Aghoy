// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useModal } from './useModal';
import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';

// React 19 requires this flag for act() to run effects and flush updates.
(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

// Regression tests for the modal hook: initial focus, Tab wrap, Escape close,
// and focus restoration. Uses a real DOM (jsdom) because the hook manipulates
// document.activeElement.

const ModalHarness: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const dialogRef = useModal(isOpen, onClose, 'title');
  return (
    <div>
      <button id="before">before</button>
      {isOpen && (
        <div ref={dialogRef} id="dialog">
          <h2 id="title">Dialog</h2>
          <button id="first">first</button>
          <button id="last">last</button>
        </div>
      )}
      <button id="after">after</button>
    </div>
  );
};

const mount = (props: { isOpen: boolean; onClose: () => void }) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<ModalHarness {...props} />);
  });
  return { container, root };
};

describe('useModal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('focuses the first focusable element when opened', () => {
    const onClose = vi.fn();
    const { root } = mount({ isOpen: false, onClose });
    act(() => root.render(<ModalHarness isOpen={true} onClose={onClose} />));
    expect((document.activeElement as HTMLElement).id).toBe('first');
  });

  it('wraps Tab from the last element back to the first', () => {
    const { root } = mount({ isOpen: true, onClose: vi.fn() });
    const last = document.getElementById('last') as HTMLElement;
    act(() => { last.focus(); });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    });
    expect((document.activeElement as HTMLElement).id).toBe('first');
  });

  it('wraps Shift+Tab from the first element to the last', () => {
    const { root } = mount({ isOpen: true, onClose: vi.fn() });
    const first = document.getElementById('first') as HTMLElement;
    act(() => { first.focus(); });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true }));
    });
    expect((document.activeElement as HTMLElement).id).toBe('last');
  });

  it('closes on Escape', () => {
    const onClose = vi.fn();
    const { root } = mount({ isOpen: true, onClose });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('restores focus to the previously focused element on close', () => {
    const { root, container } = mount({ isOpen: false, onClose: vi.fn() });
    const before = document.getElementById('before') as HTMLElement;
    act(() => { before.focus(); });
    act(() => root.render(<ModalHarness isOpen={true} onClose={vi.fn()} />));
    act(() => root.render(<ModalHarness isOpen={false} onClose={vi.fn()} />));
    expect((document.activeElement as HTMLElement).id).toBe('before');
    container.remove();
  });
});
