
import image from "@/assets/images/trash/unsplash_F5oj6SYoarc.png";

const End = () => {
  return (
    <div className="h-[800px] relative">
        <div className="absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center gap-2">

            <h1 className="italic 2xl:text-[120px] xl:text-[100px] md:text-[80px]  text-[40px] font-Poppins text-white font-thin">Are You Ready?</h1>
             <button className="px-6 py-2 text-lg cursor-pointer text-primary bg-secondary rounded-xs ">
                Book Now
             </button>
        </div>
         <img src={image} alt="sdaasdasd" className="w-full h-full object-cover"/>
    </div>
  )
}

export default End