module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color1: '#effafa',
        color2: '#eef6f6',
        color3: '#7b8e8e',
        color4: '#2c3a3a',
        color5: '#5ba4a4',
      },
      backgroundImage: {
        mainBg: 'url("./images/bg-header-mobile.svg")',
        mainDeskBg: 'url("./images/bg-header-desktop.svg")',
      },
      fontFamily: {
        spartan: 'Spartan',
      },
      borderWidth: {
        5: '5px',
      },
      maxWidth: {
        '7xl': '69rem',
      },
      scale: {
        130: '1.4',
      },
      boxShadow: {
        lg:
          '0 10px 10px -4px rgba(91, 164, 164, 0.1), 0 4px 10px -2px rgba(91, 164, 164, 0.10)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
