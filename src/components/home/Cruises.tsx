import image1 from "@/assets/images/trash/86244-ritz-carlton-yacht-collection-evrima-spa-pool 1.png";
import image2 from "@/assets/images/trash/86244-ritz-carlton-yacht-collection-evrima-spa-pool 2.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cruises = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
        <div className="italic text-center 2xl:text-[60px] xl:text-[40px] md:text-[30px]  text-[30px] font-Poppins text-foreground font-[300]">Enjoy the Best of Cruise Travel</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
              <div className="relative h-[400px] ">
                  <img src={image1} className="absolute top-0 left-0 w-full h-full object-cover "/>
                  <div className="absolute start-2 bottom-2 ">
                      <div className="flex flex-col gap-2 p-8 text-secondary">
                         <h2 className="text-3xl font-bold">Aqua Cabins</h2>
                         <p className="text-lg"> Lorem ipsum dolor sit amet consectetur. Non rutrum quisque etiam viverra amet risus.</p>
                         <Link to="/" className="text-2xl font-bold mt-4 flex gap-3 items-center">Explore Now
                         <FaArrowRight/>
                         </Link>
                      </div>
                  </div>
              </div>
              <div className="relative h-[400px] ">
                  <img src={image2} className="absolute top-0 left-0 w-full h-full object-cover "/>
                  <div className="absolute start-2 bottom-2 ">
                      <div className="flex flex-col gap-2 p-8 text-secondary">
                         <h2 className="text-3xl font-bold">Polaris Suite</h2>
                         <p className="text-lg"> Lorem ipsum dolor sit amet consectetur. Non rutrum quisque etiam viverra amet risus.</p>
                         <Link to="/" className="text-2xl font-bold mt-4 flex gap-3 items-center">Explore Now
                         <FaArrowRight/>
                         </Link>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Cruises