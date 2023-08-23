import React from 'react'
import ServiceBenefitsSlider from './ServiceBenefitsSlider'


export default function ServiceBenefits() {
   

  return (
    <div className='mb-10 py-10 before:bg-service-benefits before:bg-no-repeat before:bg-cover relative before:z-[-1] before:content[""] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:h-full before:w-full before:bg-blend-overlay before:bg-primary'>
        <div className='text-center relative'>
            <h3 className='uppercase font-bold text-xl md:text-4xl text-[#00BFB2]'>5 LỢI ÍCH</h3>
            <p className='uppercase font-bold text-white text-3xl md:text-6xl'>KHI CHỌN CHÚNG TÔI</p>
        </div>
        <ServiceBenefitsSlider/>

    </div>
  )
}
