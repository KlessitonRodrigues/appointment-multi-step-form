import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: ({ colors }) => ({
      main: colors.blue["600"],
      mainBg: colors.blue["800"],
      mainText: colors.gray["50"],
      bg1: colors.white,
      bg2: colors.gray["50"],
      text1: colors.gray["800"],
      text2: colors.gray["700"],
      "default-yellow": colors.yellow["600"],
      "default-red": colors.red["700"],
      "default-green": colors.green["600"],
      "default-gray": colors.gray["400"],
      "default-blue": colors.blue["500"],
      "default-white": colors.gray["50"],
      "default-black": colors.gray["800"],
      "opacity-black": "#0006",
      ...colors,
    }),
    borderRadius: {
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "20px",
      full: "50%",
    },
    fontSize: {
      xs: "14px",
      sm: "15px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
    },
    boxShadow: {
      sm: "0 1px 3px 0 #0003",
      md: "0 1px 5px 0 #0005",
      lg: "0 1px 7px 0 #0007",
      xl: "0 1px 12px 0 #0007",
    },
  },
  plugins: [],
  safelist: [],
};
export default config;
