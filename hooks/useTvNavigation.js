'use client';

import { useEffect } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const DIRECTIONS = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};

/**
 * D-pad navigation for TV remotes.
 *
 * On a TV there is no Tab key, and the arrow keys would otherwise only scroll —
 * leaving the visitor unable to reach a button. This moves focus to the nearest
 * focusable element in the pressed direction and scrolls it into view, which is
 * the interaction people expect from a TV interface.
 *
 * When there is nothing further in that direction the event is left alone, so
 * the browser still scrolls the page normally.
 */
export function useTvNavigation(enabled) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return undefined;

    function onKeyDown(event) {
      const direction = DIRECTIONS[event.key];
      if (!direction) return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

      const target = event.target;
      if (
        target &&
        (target.isContentEditable ||
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      ) {
        return;
      }

      const candidates = Array.from(document.querySelectorAll(FOCUSABLE)).filter((el) => {
        if (el.hasAttribute('disabled') || el.getAttribute('aria-hidden') === 'true') return false;
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
      if (candidates.length === 0) return;

      const active = document.activeElement;

      // Nothing focused yet: start at the top of the page.
      if (!candidates.includes(active)) {
        event.preventDefault();
        candidates[0].focus({ preventScroll: true });
        candidates[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }

      const from = active.getBoundingClientRect();
      const fromX = from.left + from.width / 2;
      const fromY = from.top + from.height / 2;

      let best = null;
      let bestScore = Infinity;

      for (const el of candidates) {
        if (el === active) continue;

        const rect = el.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - fromX;
        const dy = rect.top + rect.height / 2 - fromY;

        let forward;
        let sideways;
        if (direction === 'up') {
          forward = -dy;
          sideways = Math.abs(dx);
        } else if (direction === 'down') {
          forward = dy;
          sideways = Math.abs(dx);
        } else if (direction === 'left') {
          forward = -dx;
          sideways = Math.abs(dy);
        } else {
          forward = dx;
          sideways = Math.abs(dy);
        }

        if (forward <= 1) continue; // not actually in that direction
        const score = forward + sideways * 2.5; // prefer whatever is straight ahead
        if (score < bestScore) {
          bestScore = score;
          best = el;
        }
      }

      if (!best) return; // nothing that way — let the browser scroll

      event.preventDefault();
      best.focus({ preventScroll: true });
      best.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled]);
}
