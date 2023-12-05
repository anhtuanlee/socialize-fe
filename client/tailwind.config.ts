import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  rules: [
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BD97",
        secondary: "#00D2A8",
        border: "#40D89D",
        "sub-text": "#4E6876",
        be: "#F2F2F2",
      },
      maxWidth: {
        "3xl": "1920px",
      },
      gridTemplateColumns: {
        "20": "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
      space: {
        section: "80px",
      },
    },
  },

  plugins: [],
};
export default config;
