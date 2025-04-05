import image from "@/assets/images/trash/unsplash_c1ixQhmDbzE.png";

const Hospitality = () => {
  return (
    <div className="my-8">
          <div className="flex flex-col lg:flex-row gap-8"> 
              <div className="lg:w-1/2 h-full">
                 <img src={image} className="w-full h-full object-cover"/>
              </div>
              <div className="lg:w-1/2  ">
                   <div className="flex flex-col gap-4 w-10/12 mx-auto">
                   <h3 className="italic  text-[32px] font-thin">Hospitality</h3>
                   <h4 className="  text-[65px] font-bold">Enjoy The Best Hospitality</h4>
                   <p className="  text-[20px] leading-8">
                   Lorem ipsum dolor sit amet consectetur. Faucibus nulla aliquam orci a pellentesque sagittis venenatis rhoncus. Posuere pulvinar sit aenean maecenas amet nam egestas phasellus quis. Mus risus nec mauris suspendisse quis aliquam etiam vel. Adipiscing diam viverra vulputate sit libero nunc. 

                    Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit.
                   </p>
                   </div>
              </div>
          </div>
    </div>
  )
}

export default Hospitality