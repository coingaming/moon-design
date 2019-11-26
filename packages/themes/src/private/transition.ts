import { createGlobalStyle } from 'styled-components';

export const themeTransitionClass = 'is-transitioning-theme';
export const themeTransitionDuration = 250;

/**
 * For some reason Styled Components doesn't like this in object format, so
 * let's use a template string for now.
 */
export const ThemeTransition = createGlobalStyle`
  .${themeTransitionClass} {
    &, *, *::before, *::after {
      transition-property: color, background-color, border-color !important;
      transition-timing-function: ease !important;
      transition-duration: ${themeTransitionDuration}ms !important;
    }
  }
`;
