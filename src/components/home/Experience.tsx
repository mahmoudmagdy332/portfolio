import image from "@/assets/images/trash/unsplash_c1ixQhmDbzE.png";

const Experience = () => {
  return (
    <div className="flex justify-end w-full bg-cover bg-no-repeat">
       <div className="w-full lg:w-11/12  relative"
        style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" }}
        >
             <div className="bg-secondary max-w-[400px] p-4 flex flex-col gap-4 m-2 lg:m-20">
             <h3 className="italic font-Poppins text-[32px] font-thin">Hospitality</h3>
             <h4 className="  text-[40px] font-bold">Enjoy The Best Experience</h4>
             <p className="  text-[16px] leading-8">
             Lorem ipsum dolor sit amet consectetur. Faucibus nulla aliquam orci a pellentesque sagittis venenatis rhoncus. Posuere pulvinar sit aenean maecenas amet nam egestas phasellus quis. Mus risus nec mauris suspendisse quis aliquam etiam vel. Adipiscing diam viverra vulputate sit libero nunc. 

             Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit.
                   </p>
             </div>
             {/* <img src={image} className="w-full h- absolute top-0 left-0"/> */}
       </div>
    </div>
  )
}

export default Experience