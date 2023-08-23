"use client";

import React,{useState,useEffect} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeRateData } from "@/static/sectionData";


export default function HomeSlider() {


    const [slideNumber,setSlideNumber] = useState(1);


    useEffect(() => {
      
        if(window.innerWidth>=0) {
            setSlideNumber(1)
        }
        if(window.innerWidth>=768) {
            setSlideNumber(2)
        }
         if(window.innerWidth>=1280) {
            setSlideNumber(3)
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth>=0) {
                setSlideNumber(1)
            }
            if(window.innerWidth>=768) {
                setSlideNumber(2)
            }
             if(window.innerWidth>=1280) {
                setSlideNumber(3)
            }
        });


      }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: slideNumber,
    arrows: false,
    autoplay: true,
    autoplayspeed: 2000
  };
  

  return (
    <div className="my-20 ">
        <div className="pb-10 relative">
            <h3 className="text-2xl xl:text-5xl text-center">
            Khách hàng nói gì về chúng tôi
            </h3>
          
            <div className="h-[2px] bottom-0 w-[50px] bg-black absolute left-[50%] translate-x-[-50%]">

            </div>
        </div>
        <Slider {...settings} className="px-2 z-1 md:px-10 xl:px-40 relative home__rate-slider">
        {
          HomeRateData.map(item => <div className="py-10 px-5" key={item.id}>
            <div className="flex pb-2 relative border-b border-slate-200">
           
                <div>
                    <img  className="rounded-full" src={item.avatar} alt="" />
                </div>
                <div className="ml-5">
                    <h3  className="font-semibold text-xl">
                        {item.name}
                    </h3>
                    <p className="text-sm text-style-1">
                        {item.address}
                    </p>
                </div>
            </div>
            <div className="pt-2">
                <p className="text-sm italic text-style-1">
                    {item.content}
                </p>
            </div>
          </div>
          )
        }
      </Slider>
    </div>
  )
}
