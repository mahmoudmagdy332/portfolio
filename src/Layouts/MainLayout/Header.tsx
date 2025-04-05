import { useEffect, useState } from "react";

// import image from "@/assets/Layout/Jebal.png";

// import Egypt from "@/assets/Layout/64px-Flag_of_Egypt.svg.webp";
// import US from "@/assets/Layout/Flag_of_the_United_Kingdom_(1-2).svg"; 

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLanguage, useLanguageSelector } from "@/stores/Reducers/LanguageSlice";
import Menu from "@/components/layout/Menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/layout/mode-toggle";

export const links=[
  {
   link:"/",
   name:"Home"
  },
  {
   link:"/about",
   name:"About"
  },
  {
   link:"/experience",
   name:"Experience"
  },
  {
   link:"/projects",
   name:"Projects"
  },
  {
   link:"/contactUs",
   name:"Contact Us"
  },
]


interface HeaderProps {
  isScrollHeader?: boolean;
}

const Header = ({ isScrollHeader = false }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  
  // const {categories,setting,menuCategories}=useSettingSelector((state)=>state.SettingReducer)

  const { lang } = useLanguageSelector((state) => state.LanguageReducer);


  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    dispatch(changeLanguage(newLang));
    window.location.reload();

  };

  useEffect(() => {
    let lastScrollY = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timeoutId: any | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 500);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const HeaderWrapper = isScrollHeader ? motion.div : 'div';
  const headerWrapperProps = isScrollHeader ? {
    initial: { y: -100 },
    animate: { y: isVisible ? 0 : -100 },
    transition: { type: "spring", stiffness: 300, damping: 25 }
  } : {};

  return (
    <HeaderWrapper
      className={`w-full text-black  shadow-md z-50 transition-transform duration-500 ${
        isScrollHeader ? "fixed top-0 left-0" : "relative"
      }`}
      {...headerWrapperProps}
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
        
       
     
             
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
         <Button className="hidden md:flex bg-primary cursor-pointer rounded-xs" >
              Book Now

          </Button> 
          <ModeToggle/>
          <div   
              className={`  hidden md:flex  items-center gap-2  pe-2 space-x-2 hover:text-blue-600 text-gray-600 cursor-pointer`}
              onClick={toggleLanguage}
            >
              
              {/* <img 
                src={lang === 'en' ? Egypt : US} 
                alt={lang === 'en' ?'US flag' :   'Arabic flag'} 
                className="w-6 h-4" 
              /> */}
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </div>    

          <div className="lg:hidden pe-2">
            <Menu />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;