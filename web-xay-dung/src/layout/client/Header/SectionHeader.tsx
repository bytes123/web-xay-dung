import React, { ReactNode } from 'react';

type props = {
    icon: ReactNode,
    children: ReactNode
}

export default function SectionHeader({icon,children}: props) {

   
  return (
    <div className='flex gap-3 '>
        <div className='text-2xl p-2 bg-dark text-white rounded-full'>
            {icon}
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}
