module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
      backgroundImage: {
        form: "url('../public/images/login/Frame-letter.png')",
      },
      colors: {
        light: "#F5F5F5",
        dark: "#1E2229",
        "gray-dark": "#AEAEAE",
        "gray-light": "#F2F1F2",
        mainBlue: "#aae6f0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// #E9EFFB
