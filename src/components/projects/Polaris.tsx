import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import image from "@/assets/images/trash/86244-ritz-carlton-yacht-collection-evrima-spa-pool 1.png";
import { Link } from "react-router-dom";

  
const Polaris = () => {
  return (
    <div className="w-10/12 mx-auto my-10 pb-10">
        <Carousel>
        <CarouselContent>
            <CarouselItem>
                <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
                     <div className="lg:w-5/12">
                         <img src={image}/>
                     </div>
                     <div className="lg:w-7/12 flex flex-col gap-4">
                     <h2 className="text-5xl  text-foreground font-[300]">Polaris</h2>
                         <p className="text-lg text-foreground" > Lorem ipsum dolor sit amet consectetur. Faucibus nulla aliquam orci a pellentesque sagittis venenatis rhoncus. Posuere pulvinar sit aenean maecenas amet nam egestas phasellus quis. Mus risus nec mauris suspendisse quis aliquam etiam vel. Adipiscing diam viverra vulputate sit libero nunc. </p>
                         <div className="flex justify-start">
                         <Link to="/" className="text-lg  px-6 py-2 border border-primary flex gap-3 items-center text-primary">
                         Book Now
                         </Link>
                         </div>
                     </div>
                </div>
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
        </CarouselContent>
       <div className="hidden lg:flex">
         <CarouselPrevious />
         <CarouselNext />
       </div>
        </Carousel>

    </div>
  )
}

export default Polaris