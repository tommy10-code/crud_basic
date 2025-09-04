// tailwind.config.js
export default {
  content: [
    "./app/views/**/*.html.erb",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        button: ['Roboto', 'sans-serif'],
      },
    },
  },
}