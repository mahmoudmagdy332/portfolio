import image from "@/assets/images/home/me.png";
import Logo from "@/assets/images/home/Logo.png";
// import Dots from "@/assets/images/home/Dots.png";

const Hero = () => {
  return (
   <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-6 ">
     <div className=" relative w-full lg:w-2/3">
         <div className="absolute left-0 top-0 h-full w-full flex flex-col items-start justify-center gap-2">
 
             <h1 className="italic 2xl:text-[40px] xl:text-[30px] fontdiner-swanky-regular md:text-[20px]  text-[20px]  text-white font-thin">
             Elias is a <span className="text-primary">web designer</span> and <span className="text-primary">front-end developer</span>
             </h1>
             <p className="   text-[16px]  text-white ">
             He crafts responsive websites where technologies meet creativity
             </p>
         </div>
     </div>
     <div className="w-full lg:w-1/3 relative h-[600px]">
     <img src={Logo} alt="me" className="  absolute z-10 h-20 -start-4 top-1/2"/>
     <img src={image} alt="me" className="  absolute h-full z-20"/>
     {/* <img src={Dots} alt="me" className=" absolute z-10 end-20 bottom-50 h-20"/> */}
     </div>
   </div>
  )
}

export default Hero