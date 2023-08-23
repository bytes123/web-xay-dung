"use client";

import React,{useState,useEffect} from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceReasonData } from "@/static/serviceData";
import Image from 'next/image'


export default function ServiceBenefitsSlider() {
    const [slideNumber,setSlideNumber] = useState<number>(1);


    useEffect(() => {
        const updateSlideNumber = () => {
            if (window.innerWidth >= 1280) {
                setSlideNumber(5);
            } else if (window.innerWidth >= 768) {
                setSlideNumber(3);
            } else {
                setSlideNumber(1);
            }
        };

        // Set initial slide number based on window width
        updateSlideNumber();

        // Update slide number when window is resized
        window.addEventListener('resize', updateSlideNumber);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateSlideNumber);
        };
    }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: slideNumber,
    arrows: false
  };
  

  return (
    <div className='px-5 sm:px-10 xl:px-40'>
    <Slider {...settings}  className="slider relative">
        {
          ServiceReasonData.map(item => <div key={item.id} className="py-10 px-2">
            <div className='max-w-[180px] mx-auto'>
                <img src={item.logo} alt="" />
            </div>
            <div>
                <p className='italic font-mono text-white'>{item.content}</p>
            </div>
        </div>)
        }
      </Slider>
      </div>
  )
}
