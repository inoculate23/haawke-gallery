import type { NextPage } from 'next'
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

  return (
    <>
      <Head>
        <title>Haawke Neural Technology - Las Vegas AI experts</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">

            <iframe src="https://editor.fusionbrain.ai/"
            id="myFrame"
            width="100%" 
             height="100%
          </iframe>
     )
          />
        )}
      
         
      </main>
  
    </>
  )
}
export default Tools

export async function getStaticProps() {
  const results = await iframe
   
  return {
    props: {
      images: reducedResults,
    },
  }
}
