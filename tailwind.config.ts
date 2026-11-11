import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#f2f4f6', // Original HTML uses gray-100 for text and gray-800 for the badge background
        'gray-800': '#424242', // Adjusted to match the visual gray-800 from original
        'today-dark': '#19191a', // Custom name for the dark background color
        'today-green': '#28c667', // For the live dot and timer text
        'today-light-gray': '#f2f4f6', // For the date badge background
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"], // Assuming Pretendard font is loaded
      },
      fontSize: {
        '10px': '10px',
        '18px': '18px',
      },
      lineHeight: {
        '14px': '14px',
        '25px': '25px',
      },
      borderRadius: {
        '2px': '2px',
        '12px': '12px',
      },
      spacing: {
        '3px': '3px',
        '6px': '6px',
        '9px': '9px',
      },
      width: {
        '220px': '220px',
      },
      height: {
        '275px': '275px',
      },
    },
  },
  plugins: [],
};
export default config;