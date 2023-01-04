/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "marineBlue": "#EEF4FB",
        "purplishBlue": "#473DFF",
        "pastelBlue": "#ADBEFF",
        "lightBlue": "#BFE2FD",
        "strawberryRed": "#ED3548",
        "coolGray": "#9699AB",
        "lightGray": "#D6D9E6",
        "magnolia": "#F0F6FF",
        "alabaster": "#FAFBFF",
      },

      fontFamily: {
        "ubuntu": ["Ubuntu", "san-serif"],
      },
    },
  },
  plugins: [],
}
