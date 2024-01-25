import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: {
          100: "#cbc5cb",
          700: "#54082d",
          900: "#380622",
        },
      },
    },
  },
  plugins: [],
};
export default config;
