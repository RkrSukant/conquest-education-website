// tailwind.config.js
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./(main)/**/*.{js,ts,jsx,tsx,mdx}",
      
      // Include paths where you use Tailwind classes
    ],
    theme: {
      extend: {
        screens: {
          'md2': '1193',
        },
      },
    },
  }