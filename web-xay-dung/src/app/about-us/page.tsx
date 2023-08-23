import Heading from '@/components/Utils/Heading'
import React from 'react'
import AboutTurnIntro from "../../components/About/AboutTurnIntro"
import AboutMainIntro from '@/components/About/AboutMainIntro'
export default function AboutPage() {
  return (
    <div>
      <Heading/>
      <AboutMainIntro/>
      <AboutTurnIntro/>
    </div>
  )
}
