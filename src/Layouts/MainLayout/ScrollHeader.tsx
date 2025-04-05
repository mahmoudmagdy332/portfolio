import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Menu from "@/components/layout/Menu";
import {  NavLink } from "react-router-dom";
import { changeLanguage, useLanguageSelector } from "@/stores/Reducers/LanguageSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { links } from "./Header";


const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

    // const {categories,setting,menuCategories}=useSettingSelector((state)=>state.SettingReducer)
     const { lang } = useLanguageSelector((state) => state.LanguageReducer);
    
   
      
      const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        dispatch(changeLanguage(newLang));
        window.location.reload();
    
      };

  

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <motion.div
      className={`w-full text-black bg-white shadow-md z-50 ${
        isVisible ? "fixed top-0 left-0 w-full" : "hidden"
      }`}
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3}}
    >
         <div className="flex items-center justify-between lg:w-11/12 xl:w-10/12 mx-auto py-2">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img src="/src/assets/images/trash/logo AD full 1.svg" alt="Logo" className="h-14" />
          </NavLink >
        </div>

        {/* Navigation */}
        
        <nav className="hidden lg:flex flex-1 justify-center bg-primary2">
          <ul className="flex gap-8 px-1">
          {links.map((link)=>(
            <NavLink
            key={link.link}
            to={link.link}
            className={({ isActive }) =>
              ` cursor-pointer  text-primary ${isActive ? " font-bold" : ""}`
            }
          >
           {/* {translations.Home.toLocaleUpperCase()} */}
           {link.name}
          </NavLink>
        ))}
        
       
     
               <li 
              className={`flex ${lang === 'ar'?"":" flex-row-reverse"} hidden md:flex  items-center gap-2 space-x-2 hover:text-blue-600 text-gray-600 cursor-pointer`}
              onClick={toggleLanguage}
            >
              {/* <img 
                src={lang === 'en' ? Egypt : US} 
                alt={lang === 'en' ?'US flag' :   'Arabic flag'} 
                className="w-6 h-4" 
              /> */}
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
         <Button className="bg-primary hidden md:flex cursor-pointer rounded-xs" >
              Book Now

          </Button> 

                

          <div className="lg:hidden pe-2">
            <Menu />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollHeader;