"use client"

import React,{useEffect} from 'react'
import { usePathname } from 'next/navigation';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Heading() {
    const pathname = usePathname();
    
    let header = pathname.replace(/[^a-zA-Z0-9 ]/g, ' ')

  return (
    <div className="py-20 px-5 sm:px-10 xl:px-40 bg-[#EFF5F6] flex flex-col md:flex-row justify-between items-center">
        <div>
            <h1 className="text-5xl capitalize text-style-1 font-bold">{header}</h1>
        </div>
        <div className='flex items-center'>
            <span>Home</span>
            <BsArrowRightShort className='mx-2 opacity-50'/>
            <span className='opacity-50 first-letter:uppercase'>{header}</span>
        </div>
    </div>
  )
}
