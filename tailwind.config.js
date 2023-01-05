module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./containers/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter', sans-serif"],
      },
      backgroundImage: {
        'form': "url('../public/images/login/Frame-letter.png')",
      },
      colors: {
        light: "#F5F5F5",
        dark: "#1E2229",
        mainGray: "#AEAEAE",
        mainBlue: "#B4E9F2",
      },
    },
  },
  plugins: [],
};

// #E9EFFB
