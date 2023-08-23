"use client"
import Link from 'next/link'
import React,{ useEffect, useState } from 'react'
import {FaBars} from "react-icons/fa"
import {GrClose} from "react-icons/gr"
import { usePathname } from 'next/navigation';
import { routing } from '@/router'
import { Modal } from '@mui/material'
import Image from 'next/image'
export default function MobileHeader() {
  const pathname = usePathname();
  const [isToggle,setIsToggle] = useState<boolean>(false)
  
  const handleToggleMenu = () => {
    setIsToggle(!isToggle)
  }

  const handleCloseMenu = () => {
    setIsToggle(false)
  }

  useEffect(() => {
    if (isToggle){
      document.body.style.overflowY = "scroll";
    }else {
      document.body.style.overflow = "auto"
    }
  }, [isToggle]);

  return (
    <div className={`sticky top-0 z-[999] bg-white p-4 sm:px-6 after:content-[""] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:z-[-1] after:shadow-border block lg:hidden`}>
     <Modal 
      disableScrollLock
    sx={{
      "&.MuiModal-root .MuiModal-backdrop ": {
        background: "transparent",
      },
    }}
     className="!z-[998] shadow-border" open={isToggle} onClose={handleCloseMenu}>
    <div></div>
     </Modal>
     <div className={`absolute  shadow-border py-5 top-[100%] bg-white z-[-2] h-[100vh] w-[240px] left-0 ${!isToggle ? 'translate-x-[-100%]' : 'translate-x-0'} transition-transform transtion ease-in-out duration-[400ms]`}>
        {
          routing.map(item => <div className={`${item.link == pathname ? 'bg-primary-1' : null} hover:bg-primary-1 mb-2 transition-all`} key={item.id}>
          <Link href={item.link} className={`${item.link == pathname ? 'text-white' : null} py-3 px-5 text-style-1 hover:text-white first-letter:uppercase block text-lg transition-colors`}>
            {item.name}
          </Link>
        </div>)
        }
    </div>
     <div className="flex items-center ">
     <div className='cursor-pointer inline-block'  onClick={handleToggleMenu}>
     <FaBars className={`text-2xl  ${!isToggle ? 'opacity-100 scale-100 w-auto h-auto' : 'opacity-0 scale-50  w-0 h-0'} transition-all`}/>
     <GrClose className={`text-2xl ${isToggle ? 'opacity-100 scale-100 w-auto h-auto' : 'opacity-0 scale-50 w-0 h-0'} transition-all`}/>
      </div>
      <div className="flex-1 flex justify-center">
        <Link href='' className="inline-block">
        <Image src="/logo-dark.png" width={180} height={50}  alt="" />
        </Link>
      </div>
     
     </div>
    </div>
  )
}
