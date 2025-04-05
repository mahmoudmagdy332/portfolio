import image from "@/assets/images/trash/kristina-tamasauskaite-pvfS65ySVXY-unsplash 1.svg";
const Hero = () => {
  return (
    <div className="h-[600px] relative">
        <div className="absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center gap-2">

            <h1 className="italic 2xl:text-[120px] xl:text-[100px] md:text-[80px]  text-[40px] font-Poppins text-white font-thin">Experience Egypt</h1>
            <p className=" text-center 2xl:text-[32px]  xl:text-[24px]  text-[20px] font-Montserrat text-white ">Your Gateway to Unforgettable Adventure</p>
        </div>
         <img src={image} alt="sdaasdasd" className="w-full h-full object-cover"/>
    </div>
  )
}

export default Hero