import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
        colors: {
          "primary-color-t": "#01303A",
          "nav-color": "#3C4A47",
          "contact-color": "#394649",
          "contact-btn": "#E7F874",
        }
    },
  },
  plugins: [],
};
export default config;
