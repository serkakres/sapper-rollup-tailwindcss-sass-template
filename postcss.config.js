const prod = process.env.NODE_ENV !== 'development';

module.exports = {
  plugins: [
    require('tailwindcss'),
    prod && require('autoprefixer'),
    prod && require('cssnano'),
  ].filter(Boolean),
};