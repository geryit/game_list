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
          180: "#2B2B2B",
        },
        yellow: {
          550: "#FDBC11", // custom yellow
        },
        red: {
          550: "#EC4466", // custom yellow
        },
      },
      boxShadow: {
        custom: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  safelist: ["grid-cols-2", "grid-cols-3", "grid-cols-4"],
  plugins: [],
};
export default config;
