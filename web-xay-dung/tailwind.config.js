/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A4D68",
        "primary-1": "#088395",
        dark: "#05BFDB",
        light: "#00FFCA",
        "style-1": "#7b7e82",
        footer: "#0A4D68",
      },
      backgroundImage: {
        "service-benefits": "url('/service-benefits-background.png')",
      },
      boxShadow: {
        border: "0px 2px 10px 0px rgba(49, 49, 50, 0.13)",
      },
    },
  },
  plugins: [],
};
