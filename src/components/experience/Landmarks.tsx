import image from "@/assets/images/trash/Landmarks.png";

const Landmarks = () => {
    const list=[{id:1,title:"Karnak",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
        {id:2,title:"Valley Of Kings",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
        {id:3,title:"Hot Air Balloon",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
        {id:4,title:"The Old Cataract",description:"Ornare urna tristique magna a id parturient. Aenean felis egestas sagittis porttitor donec est eu magna sed. Id elementum sed faucibus placerat. Tristique aliquam sodales lacus eget amet. Integer a amet quis sit."},
    ]
  return (
    <div className="py-10">
    
    <h1 className="italic 2xl:text-[70px] py-10 text-center xl:text-[50px] md:text-[40px]  text-[30px] font-Poppins text-primary font-thin">
    Landmarks
    </h1>
    <div className="flex flex-col lg:flex-row gap-8"> 
        <div className="lg:w-1/2 h-full">
           <img src={image} className="w-full h-full object-cover"/>
        </div>
        <div className="lg:w-1/2  ">
             <div className="flex flex-col gap-12 w-11/12 me-auto">
             {list.map((item,index)=>(
                     
                       <div className="flex gap-3">
                        <div className="text-[24px]">{index<=10?`0${index+1}`:index}</div>
                        <div className=" px-4 flex flex-col gap-2">
                       <h3 className="text-primary text-[24px] font-bold">{item.title}</h3>
                       <p className="text-primary">{item.description}</p>
                       </div>

                       </div>
                        
                 
       
         ))}
    
            
             </div>
        </div>
    </div>
</div>
  )
}

export default Landmarks