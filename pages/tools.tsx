import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import Logo from '../components/Icons/Logo'

import cloudinary from '../utils/cloudinary'
import getBase64ImageUrl from '../utils/generateBlurPlaceholder'
import type { ImageProps } from '../utils/types'


function tools() {
  return (
    <>
      <Head>
        <title>Kandinsky 2.2</title>
      </Head>
      <h1>My Page</h1>
      <iframe src="https://editor.fusionbrain.ai/" width="100%" height="100%"></iframe>
    </>
  );
}



            
 
export default tools;


