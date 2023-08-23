import SocialMedia from '@/components/Utils/SocialMedia'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import {MdLocationOn} from "react-icons/md"
import {FiClock} from "react-icons/fi"
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='min-h-[300px] bg-footer'>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 px-5 py-10 md:p-10 xl:px-40">
          <div className='flex flex-col items-center xl:items-start gap-y-5 xl:gap-y-24'>
            <Link href="./">
            <Image src="/logo.png" width={200} height={50} className="max-w-[200px]" alt="" />
            </Link>
            <SocialMedia/>
          </div>
          <div>
            <div className='pb-2 border-b border-slate-100'>
              <h2 className='text-2xl font-semibold text-white text-center xl:text-left'>Thư mới</h2>
            </div>
            <div className='py-5 text-white'>
              <p className='text-sm'>
              Cập nhật tin tức và cập nhật luôn sắp tới của chúng tôi. Nhập e-mail của bạn và đăng ký nhận bản tin của chúng tôi.
              </p>
            </div>
            <div className='flex mx-auto max-w-[300px] relative mt-2 rounded-r-3xl'>
              <input placeholder='Enter your email...' type="text" className='text-xs w-[76%] pl-6 pr-[34px] py-3 outline-none border-none rounded-l-3xl'/>
              <button className='rounded-3xl bg-red-500 text-sm absolute right-0 h-full px-4 font-semibold text-white'>ĐĂNG KÝ</button>
            </div>
          </div>
          <div className='text-white xl:col-span-2'>
            <div className='pb-2 border-b border-slate-200 text-2xl font-semibold'>
              <h2 className='text-center xl:text-left'>Liên hệ chúng tôi</h2>
            </div>
            <div className='grid gap-y-5 grid-cols-1 xl:grid-cols-2 py-5 '>
              <div className='flex items-center xl:items-start'>
                <div>
                  <BsFillTelephoneFill/>
                </div>
                <div className='text-sm ml-5 flex-1'>
                <p>
                1-800-1234-567
                </p>
                <p>
                1-800-1234-567
                </p>
                </div>
              </div>
              <div className='flex items-center xl:items-start'>
                <div>
                  <MdLocationOn className='text-xl'/>
                </div>
                <div className='text-sm ml-5 flex-1'>
                <p>
                2130 Fulton Street, San Diego,
CA 94117-1080 USA
                </p>
                </div>
              </div>
             
              <div className='flex items-center xl:items-start'>
                <div>
                  <MdOutlineEmail className='text-xl'/>
                </div>
                <div className='text-sm ml-5 flex-1'>
                <p>
                info@demolink.org
                </p>
                </div>
              </div>
              <div className='flex items-center xl:items-start'>
                <div>
                  <FiClock className='text-xl'/>
                </div>
                <div className='text-sm ml-5 flex-1'>
                <p>
                Mon-Fri: 9:00am-6:00pm
                </p>
                <p>
                Sat-Sun: 10:00am-5:00pm
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
