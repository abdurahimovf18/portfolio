import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xxs': '280px', 
        'xs': '360px', 
        'sm': '480px',  
        'md': '640px',
        'lg': '768px',  
        'xl': '1024px',  
        '2xl': '1280px', 
        '3xl': '1536px',
        '4xl': '1920px',
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "2/1": "2 / 1",
      }
    },
  },
  plugins: [],
} satisfies Config;
