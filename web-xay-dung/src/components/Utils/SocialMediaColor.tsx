import React from 'react'

import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {TfiPinterest} from "react-icons/tfi"
import {BiLogoGoogle} from "react-icons/bi"
import Link from 'next/link'


export default function SocialMediaColor() {
  return (
    <div className='flex items-center gap-2'>
    <Link href="/" className="p-3 bg-[#395B98] rounded-full">
    <FaFacebookF className="text-white text-xl"/>
    </Link>
    <Link href="/" className="p-3 bg-[#E7082A] rounded-full">
    <TfiPinterest className="text-white text-xl"/>
    </Link>
    <Link href="/" className="p-3 bg-[#2CA7E0] rounded-full">
    <AiOutlineTwitter className="text-white text-xl"/>
    </Link>
    
    <Link href="/" className="p-3 bg-[#D95139] rounded-full">
    <BiLogoGoogle className="text-white text-xl"/>
    </Link>
</div>
  )
}
