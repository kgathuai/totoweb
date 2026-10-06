'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * Brand palette taken from the Uni-Learn app itself (totoLearn/app/theme.js) so
 * the landing page and the product share one visual language. The coral primary
 * also matches the red TV mark in public/totologo.png.
 *
 * The previous landing-page theme used a green (#16a34a) that appears nowhere in
 * the product, and set primary/secondary/success/warning all to that same colour.
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

function getDesignTokens(mode) {
  const isDark = mode === 'dark';
  const divider = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(43,17,20,0.10)';

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
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: 'var(--font-nunito), "Segoe UI", system-ui, -apple-system, sans-serif',
      h1: {
        fontSize: 'clamp(2.25rem, 1.4rem + 3.4vw, 3.9rem)',
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: 'clamp(1.75rem, 1.2rem + 2.1vw, 2.75rem)',
        fontWeight: 900,
        lineHeight: 1.15,
        letterSpacing: '-0.015em',
      },
      h3: { fontSize: 'clamp(1.3rem, 1.1rem + 1vw, 1.65rem)', fontWeight: 800, lineHeight: 1.25 },
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
          html: { scrollBehavior: 'smooth', scrollPaddingTop: 92 },
          body: { WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility' },
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: '11px 24px',
            minHeight: 46,
            fontWeight: 800,
            '&:focus-visible': { outline: `3px solid ${brand.coral.dark}`, outlineOffset: 2 },
          },
          sizeLarge: { padding: '15px 32px', minHeight: 56, fontSize: '1.0625rem' },
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
      MuiAccordionSummary: {
        styleOverrides: { root: { px: 2.5, py: 1.5 } },
      },
      MuiAccordionDetails: { styleOverrides: { root: { px: 2.5, pb: 3, pt: 0 } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 800, borderRadius: 999 } } },
      MuiListItemIcon: { styleOverrides: { root: { minWidth: 30 } } },
    },
  };
}

export function ThemeRegistry({ children }) {
  const [mode, setMode] = useState('light');

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

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
