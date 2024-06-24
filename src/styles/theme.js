import quoteBackgroundImage from '../assets/images/quote-background.jpg';

export const theme = {
  colors: {
    main: '#f1ebeb',
    mainLight: '#fbfbfb',
    background: 'rgba(241, 235, 235, 255)',
    borderGrey: '1px solid rgb(89 86 86 / 19%);',
    golden: 'rgb(218,165,32)',
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    purple: 'rgba(170, 4, 168, 0.989)',
    pink: '#f872e1',
  },
  sizes: {
    navbarHeight: '60px', 
  },
  breakpoints: {
    phase1: '480px',
    phase2: '768px',
    phase3: '1024px',
    phase4: '1200px',
    phase5: '1440px',
  },
  fontSizes: {
    small: '0.75rem',
    normal: '0.875rem',
    large: '1rem',
  },
  transitions: {
    default: '0.3s ease',
  },
  zIndices: {
    navbar: 20,
  },
  images: {
    quoteBackground: quoteBackgroundImage,
  },
};