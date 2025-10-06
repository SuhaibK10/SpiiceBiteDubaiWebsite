import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#28b862",
          green2: "#2ecc71",
          ink: "#333",
          leaf: "#354e36",
          sand: "#f6efe6",
        },
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
