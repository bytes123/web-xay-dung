import React from 'react'

import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {TfiPinterest} from "react-icons/tfi"
import {BiLogoGoogle} from "react-icons/bi"
import Link from 'next/link'


export default function SocialMedia() {
  return (
    <div className='flex items-center'>
    <Link href="/" className="p-1">
    <FaFacebookF className="text-white text-xl"/>
    </Link>
    <Link href="/" className="ml-2 p-2">
    <AiOutlineTwitter className="text-white text-xl"/>
    </Link>
    <Link href="/" className="ml-2 p-1">
    <TfiPinterest className="text-white text-xl"/>
    </Link>
    <Link href="/" className="ml-2 p-1">
    <BiLogoGoogle className="text-white text-xl"/>
    </Link>
</div>
  )
}
