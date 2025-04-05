

const Includes = () => {
    const list=[{id:1,title:"Hotels",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
        {id:2,title:"Food",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
        {id:3,title:"Tickets",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
        {id:4,title:"Boat Trips",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
    ]
  return (
   <div className="w-10/12 mx-auto my-10 ">
    <h1 className="italic 2xl:text-[70px] py-10 text-center xl:text-[50px] md:text-[40px]  text-[30px] font-Poppins text-primary font-thin">
    Your Experience Includes
    </h1>
     <div className="flex flex-col gap-8 relative pt-16">
         {list.map((item,index)=>(
             <div key={item.id} className={`flex relative ${index%2===0?'justify-end':'justify-start'}`}>
                     <div className="w-1/2 px-8 flex flex-col gap-2">
                        <h3 className="text-primary text-[24px] font-bold">{item.title}</h3>
                        <p className="text-primary">{item.description}</p>
                     </div>
                     <div className="size-5 rounded-full bg-primary absolute  top-0 left-1/2 -translate-x-1/2 z-10"></div>
             </div>
         ))}
         <div className="w-0.5 h-full absolute top-0 left-1/2 -translate-x-1/2
         bg-linear-to-r from-[#839DB080] via-[#37424A] to-[#839DB080]"></div>
     </div>
   </div>
  )
}

export default Includes