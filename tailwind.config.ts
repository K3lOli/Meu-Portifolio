import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '600% 600%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lSpartan: ["var(--font-lSpartan)"],
      },
      colors: {
        BlueH: "#2A3950",
        BlueSH: "#41436A",
        Gray: "#D9D9D9",
        GrayBackground: "#F7F5F6",
      },
      fontWeight: {
        sm: "100",
        md: "700",
        lg: "800",
      },
      screens: {
        'tablet': "640px",
        'laptop': "1024px",
        'desktop': "1280px",
      },
      animation: {
        blob: "blob 7s infinite",
        blob2: "blob2 7s infinite",
        blob3: "blob3 7s infinite",
        spin: 'spin 7s infinite',
        pingPing: 'pingPing 7s infinite',
        pingPing2: 'pingPing2 10s infinite',
        pingPing3: 'pingPing3 13s infinite',
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      },
      keyframes: {
        pingPing:{
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-30vw, 0px) scale(1)",
          },
          "100%": {
            transform: "translate(0vw, 0px) scale(1)",
          }
        },
        pingPing2:{
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-30vw, 0px) scale(1)",
          },
          "100%": {
            transform: "translate(0vw, 0px) scale(1)",
          }
        },
        pingPing3:{
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-30vw, 0px) scale(1)",
          },
          "100%": {
            transform: "translate(0vw, 0px) scale(1)",
          }
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 0px) scale(1)",
          },
          "66%": {
            transform: "translate(0px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(60px, 0px) scale(1.5)",
          },
          "66%": {
            transform: "translate(0px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob3: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, 20px) scale(1)",
          },
          "66%": {
            transform: "translate(0px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "rotate(180deg) scale(1)",
          },
          "66%": {
            transform: "rotate(270deg) scale(0.9)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
