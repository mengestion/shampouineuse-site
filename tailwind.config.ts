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
        karcher: '#F3C300', // Un jaune un peu plus chaud/doré
        charcoal: '#1F2937', // Gris très foncé
        cream: '#F9FAFB', // Blanc cassé/crème
      },
    },
  },
  plugins: [],
};
export default config;