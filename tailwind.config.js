module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'cyan-dark': '#2bb3b1',
        'cyan-light': '#4abebd',
        'bright-yellow': '#c0df34',
        'light-gray': '#e5eff5',
        'grayish-blue': '#98a6bd'
      }
    }
  },
  variants: {},
  plugins: []
};
