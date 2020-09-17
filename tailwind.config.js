/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const { fontFamily } = require('tailwindcss/defaultTheme');

// tailwind.config.js
module.exports = {
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './context/**/*,{js,jsx,ts,tsx}',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Open Sans', ...fontFamily.sans],
      body: ['Open Sans', ...fontFamily.sans],
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
  },
  variants: [
    'responsive',
    // 'group-hover',
    // 'group-focus',
    // 'focus-within',
    // 'first',
    // 'last',
    // 'odd',
    // 'even',
    'hover',
    'focus',
    // 'active',
    // 'visited',
    'disabled',
  ],
};
