import React from 'react'
import {HomeIntroduceData} from "../../static/sectionData"

export default function HomeIntroduce() {
  return (
    <div className='p-5 xl:p-20 '>
       <div className="grid-cols-1 md:grid-cols-3 grid gap-10">
       {
        HomeIntroduceData.map(item =>  <div className="p-5 bg-[rgba(0,0,0,0.05)]  hover:scale-110 transition-transform duration-300" key={item.id}>
          <h3 className='font-bold text-xl mb-5 capitalize'>
          {item.title}
          </h3>
          <span>
          {item.content}
          </span>
        </div>)
       }
       
       </div>
    </div>
  )
}
