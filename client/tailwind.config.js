/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: { gridTemplateColumns: {
    "card":"repeat(auto-fill, minmax(150px, 1fr))",
    "statistic-card":"repeat(4, 1fr)"
  }
  },
};
export const plugins = [];

