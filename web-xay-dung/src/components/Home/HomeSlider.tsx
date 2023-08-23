'use client';

import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeCarouselData } from "@/static/sectionData";


export default function HomeSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  

  return (
    <Slider {...settings}  className="home-slider relative">
        {
          HomeCarouselData.map(item => <div key={item.id} className="relative">
            <div className="absolute flex items-center md:block z-20 left-0 right-0 top-0 bottom-0 py-10 px-2 md:px-20 xl:px-40 font-mono ">
            <div className="sm:mb-10 flex justify-center md:justify-start w-full text-center md:text-left">
             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:leading-[60px]  font-bold text-white md:text-[#313132] md:max-w-[78%] xl:max-w-[68%]">
             {item.title}
             </h1>
            </div>
            <div>
              <p className="text-xl md:block hidden md:max-w-[50%]  xl:max-w-[55%] text-style-1 italic">
                {item.content}
              </p>
            </div>
          </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.4)] md:opacity-0 opacity-100 transition-opacity z-10">

            </div>
          <div className="md:max-h-full h-[300px]  md:h-[500px] relative overflow-hidden">
          <img src={item.banner} className="absolute top-[30%] left-[70%] translate-x-[-70%] translate-y-[-30%] md:left-[58%] md:translate-x-[-58%] w-auto max-w-none" alt="" />
          
          </div>
         
          </div>)
        }
      </Slider>
  )
}

