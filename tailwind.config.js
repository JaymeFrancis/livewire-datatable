/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    './vendor/rappasoft/laravel-livewire-tables/resources/views/**/*.blade.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

