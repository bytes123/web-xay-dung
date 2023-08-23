import React from 'react'
import Image from 'next/image'
export default function AboutMainIntro() {
  return (
    <div className="my-20 px-5 md:px-10 xl:px-40">
       <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <img  className="mb-10 md:mb-0" src="/about-banner0.jpg" alt="" />
        </div>
       <div className="relative">
        <h1 className="text-4xl text-center pb-10 font-semibold">
        Chúng tôi là ABC
        </h1>
        <div className="absolute left-[50%] translate-x-[-50%] h-[2px] w-[100px] bg-black">

</div>
<div className='mt-10 ml-10'>
            <span className='italic text-style-1'>
            Với nhiều năm kinh nghiệm hoạt động trong lĩnh vực xây dựng, sửa chữa và thiết kế kiến trúc nội thất, chúng tôi hân hạnh cùng bạn xây dựng những giá trị vững chắc, tạo nên không gian sống mới với tiện nghi và sang trọng tối ưu.
            </span>
        </div>
        </div>
       
       </div>
    </div>
  )
}
