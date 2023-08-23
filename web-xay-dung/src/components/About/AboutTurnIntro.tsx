import React from "react";
import { AboutIntroData } from "@/static/aboutData";
import Image from 'next/image'
export default function AboutTurnIntro() {

    type props = {
        number: number,
        img: string,
        title: string,
        text: string,
    }

  return (
   <div className="px-5 md:px-10 xl:px-40 py-20">
    <div className=" relative">
        <h1 className="text-4xl text-center pb-10 font-semibold">
        5 Lý do bạn nên lựa chọn chúng tôi
        </h1>
        <div className="absolute left-[50%] translate-x-[-50%] h-[2px] w-[100px] bg-black">

        </div>
    </div>
    <div className="py-10">
    {
         AboutIntroData.map((item: props,index: number) =>   <div className="grid grid-cols-1 lg:grid-cols-2 " key={item.number}>
         <div
           className={`${index%2==0 ? "order-1 lg:order-2" : "order-1 lg:order-2"}`}
         >
           <img src={item.img} className="w-full" alt="" />
         </div>
         <div
           className={`${
             index%2==0 ? "order-2 lg:order-1" : "order-1 lg:order-2"
           } xl:p-10 p-5`}
         >
           <div>
             <h3 className="text-dark leading-none font-semibold text-xl">
               0{index+1}.
             </h3>
           </div>
           <div className="text-2xl  uppercase inline-block pt-2 pb-5 text-3xl border-dark border-solid border-b-[2px]">
             <h2>{item?.title}</h2>
           </div>
           <div className="pt-5">
             <p className="text-sm capitalize">{item?.text}</p>
           </div>
         </div>
       </div>)
    }
    </div>
   </div>
  );
}
