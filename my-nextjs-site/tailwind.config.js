/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      textShadow: {
        default: "0 1px 3px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        background: "#F7F7F7",
        foreground: "#0d0b15",
        neutral: {
          50: "#F7F7F7",
          100: "#f4f4f6",
          200: "#e6e5e8",
          300: "#d4d3d8",
          400: "#a2a2a7",
          500: "#727178",
          600: "#53525a",
          700: "#403f48",
          800: "#27262f",
          900: "#181720",
        },
        blue: {
          DEFAULT: "#a3e3ef",
          50: "#effdff",
          100: "#cbf2f8",
          200: "#a3e3ef",
          300: "#71daef",
          400: "#42c7e7",
          500: "#30adcf",
          600: "#268baf",
          700: "#1f7090",
          800: "#1d5c76",
          900: "#1b4d65",
        },
        cyan: {
          DEFAULT: "#8de8f2",
          50: "#ecfefe",
          100: "#d4fbfd",
          200: "#b4f4f9",
          300: "#8de8f2",
          400: "#5fd3e5",
          500: "#44b6cc",
          600: "#2e92ac",
          700: "#1f758c",
          800: "#195e73",
          900: "#144e62",
        },
        tiffany: {
          DEFAULT: "#84d8f8",
          50: "#f0f9fe",
          100: "#e1f4fe",
          200: "#bdeafc",
          300: "#84d8f8",
          400: "#3ec2f1",
          500: "#03aae2",
          600: "#0088bf",
          700: "#006c9a",
          800: "#005b80",
          900: "#004b6c",
        },
        turquoise: {
          DEFAULT: "#5bbed2",
          50: "#ecfefe",
          100: "#d4fdff",
          200: "#b2f8fe",
          300: "#86eef9",
          400: "#65daec",
          500: "#5bbed2",
          600: "#3e96af",
          700: "#29778e",
          800: "#1d6073",
          900: "#144e62",
        },
      },
    },
    screens: {
      xs: "0px",
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      tablet: "720px",
      // => @media (min-width: 720px) { ... }

      lg: "1140px",
      // => @media (min-width: 1140px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};

/**
 * TO USE:
 *
 * <body class="bg-background text-foreground dark:bg-foreground dark:text-background"></div>
 */
