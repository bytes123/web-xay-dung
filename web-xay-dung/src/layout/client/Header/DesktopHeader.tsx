"use client"
import React,{useState,useEffect} from 'react'
import { routing } from '../../../router/index'
import Link from 'next/link'
import SectionHeader from './SectionHeader'
import SocialMedia from '@/components/Utils/SocialMedia'
import {headerSectionData} from "../../../static/sectionData"
import { usePathname } from 'next/navigation';
import Image from 'next/image'
export default function DesktopHeader() {
    const [isSticky,setIsSticky] = useState(false)
    const pathname = usePathname();
    useEffect(() => {
      
        
        window.addEventListener('scroll', (e) => {
           if(window.pageYOffset>=300) {
            setIsSticky(true)
           }else {
            setIsSticky(false)
           }
        });


      }, []);

  return (
    <div className="lg:block hidden">
        <div className="h-[80px] bg-footer flex items-center  px-40">
           <SocialMedia/>
            <div className="text-white text-sm ml-40">
            Welcome to our service center! We work for you!
            </div>
        </div>
        <div>
        <div className=' bg-primary-1 flex justify-center items-center flex-col'>
        <div className=' px-10 xl:px-40  w-full '>
            <div className='py-5 border border-t-transparent border-r-transparent border-l-transparent  border-b-white flex justify-between'>
            <div >
                <Link href="/" className="inline-block">
                    <Image src="/logo.png" className='w-[170px] xl:w-[200px]' width={200} height={50} alt="" />
                </Link>
            </div>
            <div className="flex items-center gap-10 text-white !text-xs xl:text-md">
            {
                headerSectionData.map((item) => <div key={item.id} className="flex-1"><SectionHeader icon={item.icon} >{item.children}</SectionHeader></div>)
            }
            </div>
            </div>
        </div>
        <div className={`flex px-10 xl:px-40 bg-primary-1 scroll-header gap-20 w-full py-5 ${isSticky ? 'fixed top-0 z-[999] shadow-border' : ''}`}>
            {
                routing.map(item => <div 
                key={item.id}>
                    <Link className={`text-white hover:opacity-50 transition-opacity duration-500 block font-semibold text-lg capitalize ${pathname==item.link ? 'opacity-50' : null}`} href={item.link}>
                    {item.name}
                    </Link>
                </div>)
            }
        </div>
    </div>
        </div>
    </div>
  )
}
