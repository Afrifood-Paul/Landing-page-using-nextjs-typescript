import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        secondary: "background: hsla(215, 65%, 31%, 1)",
        primary: "hsla(24, 84%, 54%, 1)",
        blue: " hsla(215, 65%, 20%, 1)",
        lightBlue:"hsla(218, 100%, 98%, 1)",
        dark: "hsla(0, 0%, 0%, 1)"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
