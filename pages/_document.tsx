import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import NavDropdown from 'react-bootstrap/NavDropdown';
import DocumentContext type from 'next/document'
class MyDocument extends Document {
  render() {
    return (
    <>
      <Head>
         <meta name="description"
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
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
         <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" />
        </Head>
    
     <body className="bg-black antialiased">
        <Main />
        <NextScript />

       

      </body>
    </>
  )
}

}
 
        
export default MyDocument

