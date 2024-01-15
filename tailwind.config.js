/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        head:["DM Serif Display"],
        signature:["Abril Fatface"],
        slogan:["Fugaz One"],
      }
    },
  },
  corePlugins: {
    // ...
    borderOpacity: true,
    // ...
  },
}

