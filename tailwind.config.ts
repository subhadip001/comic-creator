import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
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
      backgroundColor: {
        bg_for_dark: "#1a202c",
        bg_for_light: "#f7fafc",
        bg_for_dark_bar: "#010409",
        bg_for_light_bar: "#e0e2e5",
      },
      textColor: {
        text_for_dark: "#f7fafc",
        text_for_light: "#1a202c",
      },
      borderColor: {
        border_for_dark: "#1a202c",
        border_for_light: "#f7fafc",
      },
    },
  },
  plugins: [],
};
export default config;
