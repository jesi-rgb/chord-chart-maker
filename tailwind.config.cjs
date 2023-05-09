const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Author']
      },
      screens: {
        a4: '210mm'
      }
    }
  },

  plugins: []
};

module.exports = config;
