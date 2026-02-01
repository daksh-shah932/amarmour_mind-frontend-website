module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
 theme: {
    extend: {
      colors: {
        darkbg: "#0B0F19",
        primary: "#2563EB",
        accent: "#3B82F6",
        navcolor: "rgba(57, 50, 50, 0.8)",
        navborder:"#8d6262",
        heroback:"#393232",
        textcolor:"#bb7474",
        servicehead:"#ed8d8d",
        service_card_color:"#494141",
        navcolor_dark:"#3a3333",
        navcolor_light:"#4b4343"
      },
    },
  },
  plugins: [],
}