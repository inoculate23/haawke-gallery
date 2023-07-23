import type { AppProps } from 'next/app'
import '../styles/index.css'
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
