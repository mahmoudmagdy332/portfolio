import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
// import { FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {  Link, NavLink } from "react-router-dom";
import { useLanguageSelector } from "@/stores/Reducers/LanguageSlice";

import icon from "@/assets/images/icons/Vector.png";
import sms from "@/assets/images/icons/sms.png";
import clock from "@/assets/images/icons/clock.svg";
import call from "@/assets/images/icons/call.svg";
import location from "@/assets/images/icons/location.svg";
import sms2 from "@/assets/images/icons/sms.svg";



function Footer() {
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);

   const categories=[
    {id:1,name:"Building British Island",icon:location},
    {id:1,name:"Mon - Fri : 9AM - 10PM",icon:clock},
    {id:1,name:"Info@examples.com",icon:sms2},
    {id:1,name:"+201324622796",icon:call},
  ]    
  
      
      
  
  
  const social = [
    {
      icon: <FaFacebookF />,
      color: "#10489d",
      link:""
    },
    {
      icon: <IoLogoGoogleplus />,
      color: "#dc2626",
      link:""
    },
    {
      icon: <FaXTwitter />,
      color: "#000",
      link:""
    },
    // {
    //   icon: <FaVimeoV />,
    //   color: "#1ca7cc",
    //   link:""
    // },
  ];

  return (
    <footer className="p-8">
      <div className="grid grid-cols-1 justify-center md:justify-start md:text-start text-center md:grid-cols-5 gap-12 w-11/12 lg:w-11/12 mx-auto text-black">
        <div className="flex flex-col  gap-6 md:col-span-2  items-start">
          <img src="/src/assets/images/trash/logo AD full 1.svg" alt="Logo" className="h-12" />
          <div className=" text-primary text-center  text-sm flex items-center gap-2">
            <div className=" border-primary border-2 rounded-full h-6 w-6 flex justify-center items-center ">
            <img src={icon} />
            </div>
            The AND Group is a Yacht Rental Company 2024
            </div>
           <form className="flex flex-col gap-8 relative w-full" >
            <img src={sms} className="start-2 top-4 absolute "/>
            <input
              type="email"
         
              placeholder="Email Address"
              className="p-2 rounded-mc border ps-9 py-4  bg-white text-black focus:outline-none focus:bg-yellow-50 transition-all"
            />
            <button className="bg-Main absolute end-2 px-4 py-2 text-secondary bg-primary   mt-2 hover:bg-second transition-all">
               Submit 
            </button>
{/* {isError?            <p className="text-red-500">{errors.email?.message}</p>:<p className="text-green-500">{responseMessage}</p>} */}
      </form>
        
        </div>

        <div>
          <h1 className="text-2xl font-normal mb-2">About</h1>
          <ul className="space-y-2">
                {categories.map((item,index) => (
                  <li key={item.id||index} className=" py-2  cursor-pointer">
                  <NavLink to={`/Product-category/${item.id}/${item.name}`} className="flex items-center  gap-2">
                  <img src={item.icon}/>
                  {item.name}
                  </NavLink>
                  </li>
                ))}
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-normal mb-4">Projects</h1>
          <ul className="space-y-4">
          {[{name:"Terms & Conditions",Link:"/"},{name:"Help",Link:"/"} ,{name:"Support",Link:"/"}  ].map((item) => (
              <li key={item.Link}>
 <NavLink
            to={item.Link}
            className={({ isActive }) =>
              `font-[450] cursor-pointer text-primary ${isActive ? "font-bold" : ""}`
            }
          >
          {item.name}
          </NavLink>              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <button className="bg-primary py-2 px-6 rounded-xs text-secondary text-lg hover:bg-foreground transition-all ease-in-out cursor-pointer">
             Book Now
          </button>
        <p className="text-center text-sm">
        {translations.Footer_Details}         
         </p>
         
        </div>
      </div>
      <div className="pt-2 border-t border-primary flex flex-col sm:flex-row gap-3 justify-between items-center"> 
          <div className=" text-primary text-center  text-sm flex items-center gap-2">
            <div className=" border-primary border-2 rounded-full h-6 w-6 flex justify-center items-center ">
            <img src={icon} />
            </div>
            The AND Group 2024
            </div>
              <div className="flex gap-2 mt-4">
            {social.map((item, index) => (
              <Link to={item?.link||""} 
                key={index}
                className="relative w-10 h-10 overflow-hidden cursor-pointer group"
              >
                <div
                  className="absolute inset-0 bg-white rounded-lg group-hover:bg-transparent transition-all"
                >
                  <div
                    style={{ backgroundColor: item.color }}
                    className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                  />
                </div>
                <div className="relative z-10 w-full text-xl h-full flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
            
      </div>
    </footer>
  );
}



export default Footer;
