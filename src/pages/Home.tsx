import Cruises from "@/components/home/Cruises"
import End from "@/components/home/End"
import Experience from "@/components/home/Experience"
import Hero from "@/components/home/Hero"
import Hospitality from "@/components/home/Hospitality"
import Tranquility from "@/components/home/Tranquility"

const Home = () => {
  return (
    <div >
        <Hero/>
        <Hospitality/>
        <Experience/>
        <Tranquility/>
        <Cruises/>
        <End/>
    </div>
  )
}

export default Home