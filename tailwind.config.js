export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["MyFont", "sans-serif"], // only reference the custom font
        onest: ["Onest", "sans-serif"], // Onest
      },
    },
  },
  plugins: [],
};
