import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {ServiceActivitiesData} from "@/static/serviceData"
import Image from 'next/image'
export default function ServiceActivities() {
  return (
    <div className="px-5 sm:px-10 xl:px-40 mb-10">
        <div className="flex flex-col items-center mb-5">
            <div className='flex gap-1 mb-2'>
                <AiFillStar className='text-yellow-500 text-3xl'/>
                <AiFillStar className='text-yellow-500 text-3xl'/>
                <AiFillStar className='text-yellow-500 text-3xl'/>
                <AiFillStar className='text-yellow-500 text-3xl'/>
                <AiFillStar className='text-yellow-500 text-3xl'/>
            </div>
        <h2 className="font-bold text-dark text-5xl mb-5 text-center">
        HÌNH ẢNH HOẠT ĐỘNG
                </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {
                ServiceActivitiesData.map(item => <div key={item.id}>
                    <div className="overflow-hidden rounded-xl" >
                        <img className='rounded-xl hover:scale-110 transition-transform h-[280px]' src={item.img} alt="" />
                    </div>
                    <div className="text-center my-2 text-sm italic">{item.content}</div>
                </div>)
            }
        </div>
    </div>
  )
}
