const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const shared = require('../../libs/ui-kit/tailwind.preset');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,app,pages,components}/**/*.{ts,tsx,js,jsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [shared],
};
