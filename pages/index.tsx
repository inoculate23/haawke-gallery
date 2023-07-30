import type { NextPage } from 'next'
import { Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import TypesExample from '../components/variant.js'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DocumentContext from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Logo from '../components/Icons/Logo'
import Modal from '../components/Modal'
import cloudinary from '../utils/cloudinary'
import getBase64ImageUrl from '../utils/generateBlurPlaceholder'
import type { ImageProps } from '../utils/types'
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <>
      <Head data-bs-theme="dark">
        <title>Haawke Neural Technology - Las Vegas AI experts</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossOrigin="anonymous"
/>
    
      </Head>
 <Navbar bg="dark" data-bs-theme="dark">
  
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="https://inoculate.media/assets/logo_200.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
           Haawke Neural Technology
          </Navbar.Brand>
      <ButtonGroup className="mb-2">
        <Button href="https://huggingface.co/HaawkeNeural">Huggingface</Button>
        <Button href="./tools">AI tools</Button>
       <Button href="mailto:craig@inoculate.media?cc=terbo@inoculate.media&subject=The%20subject%20of%20the%20email">Contact</Button>
             <Button href="https://github.com/inoculate23">Github</Button>
             <Button href="https://inoculate.media">Inoculate Media</Button>
      </ButtonGroup>
    <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Navbar>
      <main className="mx-auto max-w-[1960px] p-4">
 
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
          
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Haawke Neural Technology
            </h1>
            <p className="max-w-[38ch] text-white/75 sm:max-w-[32ch]">
               AI, machine learning, model training, data services
               </p>
             <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
             "If it can be imagned, we can make it"
          </p>
     <div className="inline-flex rounded-md shadow-sm">
         
      <br />
</div>
        </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
       <footer className="p-6 text-center text-white/80 sm:p-12">
        <div>
 All rights reserved, 2023 - Inoculate Media - "Design, Coding. & Consulting"  
          </div>
        <div>
          702-776-1124    Las Vegas, NV
   </div>
      </footer>
    </>
  )
}

  
export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
     
     
    },
  }
}


