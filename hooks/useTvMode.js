'use client';

import { useEffect, useState } from 'react';

/**
 * Browsers found on smart TVs and streaming sticks. Kept deliberately broad:
 * several vendors ship a plain "Chrome" user agent, which is why a media query
 * is used as a second signal below.
 */
const TV_USER_AGENT =
  /SmartTV|Smart-TV|Tizen|Web0S|WebOS|NetCast|HbbTV|BRAVIA|GoogleTV|Android ?TV|AppleTV|POV_TV|NETRANGE|Viera|CrKey|AFT[BMN]|Roku|Xbox|PlayStation|VIDAA|PhilipsTV|Hisense/i;

const TV_MEDIA_QUERY = '(min-width: 1280px) and (pointer: none) and (hover: none)';

/**
 * Platforms we know are desktops. Some of them (headless browsers, kiosk
 * shells, remote sessions) also report "no pointer", which would otherwise look
 * identical to a television. Getting this wrong is costly: in TV mode the arrow
 * keys move focus instead of scrolling, so a desktop misfire breaks the page.
 */
const DESKTOP_USER_AGENT =
  /Windows NT|Macintosh|CrOS|X11; Linux (x86_64|i686|amd64)|iPhone|iPad|iPod/i;

export function detectTvMode() {
  if (typeof window === 'undefined') return false;

  // Manual override so the TV layout can be checked (and forced) on any device:
  // append ?tv=1 or ?tv=0 to the URL.
  const forced = new URLSearchParams(window.location.search).get('tv');
  if (forced === '1') return true;
  if (forced === '0') return false;

  const ua = window.navigator.userAgent || '';

  if (TV_USER_AGENT.test(ua)) return true;

  // Unknown platform check comes first, so a desktop that merely lacks a
  // pointer is never mistaken for a TV.
  if (DESKTOP_USER_AGENT.test(ua)) return false;

  // A large viewport with neither a pointer nor hover, on a platform we cannot
  // otherwise identify, is very likely a television.
  return window.matchMedia(TV_MEDIA_QUERY).matches;
}

/**
 * True when the page is being viewed on a television. Detection runs after
 * mount, so the first paint is the standard layout and TVs upgrade a frame
 * later — this keeps the statically exported HTML valid for every device.
 */
export function useTvMode() {
  const [isTv, setIsTv] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(TV_MEDIA_QUERY);
    const update = () => setIsTv(detectTvMode());

    update();
    query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);

  return isTv;
}
