import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          150: "#fdfdfd",
          160: "#f2f2f2",
          170: "#808080",
        },
        yellow: {
          550: "#FDBC11",
        },
      },
    },
  },
  plugins: [],
};
export default config;
