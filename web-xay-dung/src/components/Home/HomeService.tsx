import React from 'react'
import {HomeServiceData} from "../../static/sectionData"
import Image from 'next/image'
export default function HomeService() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 px-2 md:px-10 xl:px-40 mb-10">
        {
            HomeServiceData.map(item => <div className="relative h-[300px] overflow-hidden group" key={item.id}>
            <div className='absolute bottom-0 z-10 w-full flex justify-center py-5 bg-[rgba(0,0,0,0.3)]'>
                <h3 className="group-hover:text-light uppercase text-md xl:text-2xl text-white font-bold text-center">{item.title}</h3>
            </div>
            <div className='absolute left-0 right-0 top-0 bottom-0 z-0'>
                <img className='w-full h-full hover:scale-110 duration-500 transition-transform object-cover' src={item.img} alt="" />
            </div>
        </div>)
        }
    </div>
  )
}
