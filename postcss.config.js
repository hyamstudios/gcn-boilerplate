/* eslint-disable global-require */
module.exports = () => ({
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')({
      browsers: ['last 3 versions'],
    }),
  ],
});
