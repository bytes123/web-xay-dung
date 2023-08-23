import HomeIntroduce from "@/components/Home/HomeIntroduce";
import HomeService from "@/components/Home/HomeService";
import HomeServiceIntro from "@/components/Home/HomeServiceIntro";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeRateSlider from "@/components/Home/HomeRateSlider";



export default function Home() {

 


  return (
    
     <div>
      <HomeSlider/>
      <HomeIntroduce/>
      <HomeServiceIntro/>
      <HomeService/>
      <HomeRateSlider/>
    </div>
    
  )
}
