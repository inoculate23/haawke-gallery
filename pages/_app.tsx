import type { AppProps } from 'next/app'
import '../styles/index.css'
import React from "react";
import Switcher from "../components/switcher";

function App() {
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				
	);
}



export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
