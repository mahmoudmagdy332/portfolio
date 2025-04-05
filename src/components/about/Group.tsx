import image from "@/assets/images/trash/about-section2.png";
const Group = () => {
  return (
    <div className="flex flex-col lg:flex-row my-8 w-11/12 mx-auto items-center">
         <div className="w-full lg:w-2/5">
             <img src={image} className="w-full"/>
         </div>
         <div className="w-full lg:w-4/5 flex flex-col gap-4">
         <div className="flex flex-col gap-4 w-10/12 mx-auto">
                   <h3 className="italic  text-[32px] font-thin">About Us</h3>
                   <h4 className="  text-[65px] font-bold">The AND <br/>Group</h4>
                   <p className="  text-[20px] leading-8">
                   Lorem ipsum dolor sit amet consectetur. Faucibus nulla aliquam orci a pellentesque sagittis venenatis rhoncus. Posuere pulvinar sit aenean maecenas amet nam egestas phasellus quis. Mus risus nec mauris suspendisse quis aliquam etiam vel. Adipiscing diam viverra vulputate sit libero nunc. 

Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit.

Lorem ipsum dolor sit amet consectetur. Faucibus nulla aliquam orci a pellentesque sagittis venenatis rhoncus. Posuere pulvinar sit aenean maecenas amet nam egestas phasellus quis. Mus risus nec mauris suspendisse quis aliquam etiam vel. Adipiscing diam viverra vulputate sit libero nunc. 
                   </p>
                   </div>
         </div>
    </div>
  )
}

export default Group