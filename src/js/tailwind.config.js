tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: { 950: "#120D2B", 900: "#1A1040", 800: "#21153F" },
        brand: { 300: "#C084FC", 400: "#A855F7", 500: "#7C3AED", 600: "#6D28D9" },
        mint: { 400: "#22D3A5" }
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"]
      },
      borderRadius: { xl2: "24px", xl3: "32px" },
      maxWidth: { shell: "1280px" }
    }
  }
};
