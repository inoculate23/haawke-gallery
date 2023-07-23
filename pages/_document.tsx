import {
  Footer,
  Navbar,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Header from "'../components/header'";
import sidebar from "../components/sidebar";
import { SidebarProvider } from "../context/SidebarContext";
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
           content="Haawke Neural - AI and machine learning design and consulting agency in Las Vegas, Nevada. Our emphasis is on creating new technology to enhance visitors' experiences in Las Vegas, and beyond."
          />
          <meta property="og:site_name"  content="Haawke Neural Technology - Las Vegas AI and machine learning experts" />
          <meta
            property="og:description"
            content="Haawke Neural - AI and machine learning design and consulting agency in Las Vegas, Nevada. Our emphasis is on creating new technology to enhance visitors' experiences in Las Vegas, and beyond."
          />
          <meta property="og:title" content="Haawke Neural Technology - Las Vegas AI and machine learning experts" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Haawke Neural Technology - Las Vegas AI and machine learning experts" />
          <meta
            name="twitter:description"
             content="Haawke Neural - AI and machine learning design and consulting agency in Las Vegas, Nevada. Our emphasis is on creating new technology to enhance visitors' experiences in Las Vegas, and beyond."
          />
        </Head>
        <body className="bg-black antialiased">
        
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


