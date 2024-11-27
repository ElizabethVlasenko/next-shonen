import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ECEAF7",
          100: "#DCD8F1",
          200: "#BDB6E3",
          300: "#9F94D4",
          400: "#8173C6",
          500: "#634FB7",
          600: "#503E92",
          700: "#3F3172",
          800: "#2F2453",
          900: "#1F1735",
          950: "#16112A",
        },
        accent: {
          50: "#E6F4F5",
          100: "#CCE9EA",
          200: "#99D3D4",
          300: "#66BEC0",
          400: "#33A8AB",
          500: "#008F95",
          600: "#00737A",
          700: "#00575F",
          800: "#003D43",
          900: "#00252A",
          950: "#00191D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
