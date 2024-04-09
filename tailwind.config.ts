import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        bigScreen: "1700px",
        tablet: "1050px",
        mobile: "770px",
        small: "500px",
        vsmall: "400px",
        xsmall: "350px",
      },
      colors: {
        lightBlue: "#CCE3FC",
        mainBlue: "#4784C4",
        lightGray: "#6D6C6E",
        mainDark: "#161925",
        onDark: "#B7B8BB",
        lightBg: "#F3EFF5",
        danger: "#b16d0e",
        accept: "#6C8F52",
      },
    },
  },
  plugins: [],
};
export default config;
