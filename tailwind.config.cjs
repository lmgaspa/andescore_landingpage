/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // A: principal (limpo, moderno — azul → lilás bem suaves)
        "app-gradient":
          "linear-gradient(135deg, #e6f2ff 20%, #f6f1ff 80%)",

        // B: chrome (navbar/footer — escuro elegante, bom contraste)
        "chrome-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
      },
    },
  },
  plugins: [],
};
