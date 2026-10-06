'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTvMode } from '@/hooks/useTvMode';
import { useTvNavigation } from '@/hooks/useTvNavigation';

/**
 * Brand palette taken from the Uni-Learn app itself (totoLearn/app/theme.js) so
 * the landing page and the product share one visual language. The coral primary
 * also matches the red TV mark in public/totologo.png.
 */
export const brand = {
  coral: { main: '#ff6b6b', dark: '#e63946', light: '#ffa5a5', tint: '#ffe5e5' },
  yellow: { main: '#ffd93d', dark: '#f2c200', light: '#ffe98a', tint: '#fff4d1' },
  mint: { main: '#6bcf7f', dark: '#3fa055', light: '#a8e6b8', tint: '#e8f5e9' },
  orange: { main: '#ff9f1c', dark: '#e07f00', tint: '#fff3e0' },
  teal: { main: '#4ecdc4', dark: '#2f9e96', tint: '#e0f7f4' },
  ink: '#2b1114',
};

const STORAGE_KEY = 'unilearn-color-mode';

const ColorModeContext = createContext({ mode: 'light', toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

/**
 * Fluid type with a plain fallback. `clamp()` needs Chrome 79+, and plenty of
 * smart-TV browsers (Tizen 2016-2019, older webOS) ship something older. So a
 * rem size is declared first and only upgraded to the fluid value where it is
 * supported. The fallback still scales on a TV, because TV mode raises the root
 * font size rather than the individual type steps.
 */
const fluid = (fallback, min, preferred, max) => ({
  fontSize: fallback,
  '@supports (font-size: clamp(1rem, 1vw, 2rem))': {
    fontSize: `clamp(${min}, ${preferred}, ${max})`,
  },
});

function getDesignTokens(mode, tv) {
  const isDark = mode === 'dark';
  const divider = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(43,17,20,0.10)';
  const focusRing = `4px solid ${brand.coral.dark}`;

  return {
    palette: {
      mode,
      primary: {
        main: brand.coral.main,
        dark: brand.coral.dark,
        light: brand.coral.light,
        // Dark ink on coral keeps CTA labels at ~6:1; white on coral is only ~3:1.
        contrastText: brand.ink,
      },
      secondary: {
        main: brand.yellow.main,
        dark: brand.yellow.dark,
        light: brand.yellow.light,
        contrastText: brand.ink,
      },
      success: { main: brand.mint.main, dark: brand.mint.dark, light: brand.mint.light },
      warning: { main: brand.orange.main, dark: brand.orange.dark },
      info: { main: brand.teal.main, dark: brand.teal.dark },
      background: isDark
        ? { default: '#171012', paper: '#231719' }
        : { default: '#fffaf7', paper: '#ffffff' },
      text: isDark
        ? { primary: '#f8eeee', secondary: '#cbb4b4' }
        : { primary: brand.ink, secondary: '#6d5658' },
      divider,
    },
    // Sizes below are in rem wherever they affect the UI's scale, so that
    // raising the root font size on a TV grows the whole interface together.
    spacing: tv ? 10 : 8,
    shape: { borderRadius: tv ? 20 : 16 },
    typography: {
      fontFamily: 'var(--font-nunito), "Segoe UI", system-ui, -apple-system, sans-serif',
      h1: {
        ...fluid('2.5rem', '2.25rem', '1.4rem + 3.4vw', '3.9rem'),
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
      },
      h2: {
        ...fluid('2rem', '1.75rem', '1.2rem + 2.1vw', '2.75rem'),
        fontWeight: 900,
        lineHeight: 1.15,
        letterSpacing: '-0.015em',
      },
      h3: {
        ...fluid('1.5rem', '1.3rem', '1.1rem + 1vw', '1.65rem'),
        fontWeight: 800,
        lineHeight: 1.25,
      },
      h4: { fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.3 },
      h5: { fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.35 },
      h6: { fontSize: '0.98rem', fontWeight: 800, lineHeight: 1.4 },
      subtitle1: { fontSize: '1.1rem', lineHeight: 1.65, fontWeight: 600 },
      body1: { fontSize: '1.0625rem', lineHeight: 1.7 },
      body2: { fontSize: '0.9375rem', lineHeight: 1.65 },
      caption: { fontSize: '0.8125rem', lineHeight: 1.5 },
      button: { fontWeight: 800, fontSize: '1rem', textTransform: 'none' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            // A TV is watched from roughly ten feet away, so the whole rem
            // scale is raised rather than restyling every element.
            fontSize: tv ? '20px' : '16px',
            scrollBehavior: 'smooth',
            scrollPaddingTop: tv ? '8rem' : '6rem',
          },
          body: { WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility' },
          // :focus-visible is missing on older TV browsers (Chrome < 86), so TV
          // mode also styles plain :focus — a remote user must always be able
          // to see where they are.
          'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': {
            outline: focusRing,
            outlineOffset: 3,
          },
          ...(tv
            ? {
                'a:focus, button:focus, [tabindex]:focus': {
                  outline: focusRing,
                  outlineOffset: 3,
                },
              }
            : {}),
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiContainer: {
        styleOverrides: {
          // Give TV layouts more of the 16:9 panel, while still leaving a wide
          // margin so nothing important sits inside a TV's overscan crop.
          ...(tv ? { maxWidthLg: { maxWidth: 1600 }, maxWidthMd: { maxWidth: 1200 } } : {}),
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 999,
            // rem, not px, so TV mode enlarges the tap target as well as the label.
            padding: '0.6875rem 1.5rem',
            minHeight: '2.875rem',
            fontWeight: 800,
            '&:focus-visible': { outline: focusRing, outlineOffset: 3 },
          },
          sizeLarge: { padding: '0.9375rem 2rem', minHeight: '3.5rem', fontSize: '1.0625rem' },
          containedPrimary: {
            backgroundColor: brand.coral.main,
            color: brand.ink,
            '&:hover': { backgroundColor: brand.coral.dark, color: '#ffffff' },
          },
          outlinedPrimary: {
            borderWidth: 2,
            borderColor: brand.coral.main,
            color: isDark ? brand.coral.light : brand.coral.dark,
            '&:hover': {
              borderWidth: 2,
              backgroundColor: isDark ? 'rgba(255,107,107,0.14)' : brand.coral.tint,
            },
          },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            borderRadius: 22,
            border: `1px solid ${divider}`,
            backgroundColor: isDark ? '#231719' : '#ffffff',
            transition: 'transform 200ms ease, box-shadow 200ms ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: isDark
                ? '0 18px 40px -20px rgba(0,0,0,0.85)'
                : '0 20px 40px -22px rgba(43,17,20,0.45)',
            },
          },
        },
      },
      MuiAccordion: {
        defaultProps: { disableGutters: true, elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${divider}`,
            borderRadius: '18px !important',
            overflow: 'hidden',
            backgroundColor: isDark ? '#231719' : '#ffffff',
            '&:before': { display: 'none' },
          },
        },
      },
      MuiAccordionSummary: { styleOverrides: { root: { px: 2.5, py: 1.5 } } },
      MuiAccordionDetails: { styleOverrides: { root: { px: 2.5, pb: 3, pt: 0 } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 800, borderRadius: 999 } } },
      MuiListItemIcon: { styleOverrides: { root: { minWidth: 30 } } },
    },
  };
}

export function ThemeRegistry({ children }) {
  const [mode, setMode] = useState('light');
  const isTv = useTvMode();

  // Remote-friendly focus movement, only on televisions.
  useTvNavigation(isTv);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        setMode(stored);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setMode('dark');
      }
    } catch {
      // localStorage can be unavailable (private mode); keep the default.
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light';
          try {
            window.localStorage.setItem(STORAGE_KEY, next);
          } catch {
            // ignore
          }
          return next;
        }),
    }),
    [mode],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode, isTv)), [mode, isTv]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
