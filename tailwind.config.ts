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
        brand: {
          primary: "#FFCA08",
          secondary: "#F8931D",
          dark: "#39302A",
          text: "#222222",
          cream: "#E5DEDB",
          muted: "#888888",
        },
      },
    },
  },
  plugins: [],
};

export default config;
