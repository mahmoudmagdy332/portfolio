import Book from "@/components/about/Book"
import FAQ from "@/components/about/FAQ"
import Group from "@/components/about/Group"
import Hero from "@/components/about/Hero"
import Number from "@/components/about/Number"
import Why from "@/components/about/Why"
import End from "@/components/home/End"

const About = () => {
  return (
    <div>
        <Hero/>
        <Group/>
        <Why/>
        <Book/>
        <Number/>
        <FAQ/>
        <End/>
    </div>
  )
}

export default About