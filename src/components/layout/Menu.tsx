import { IoClose } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { changeLanguage, useLanguageSelector } from "@/stores/Reducers/LanguageSlice";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { links } from "@/Layouts/MainLayout/Header";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Menu = () => {
  const dispatch = useDispatch();
  const { lang } = useLanguageSelector((state) => state.LanguageReducer);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    dispatch(changeLanguage(newLang));
  };

  return (
    <div>
      <Drawer direction={lang === "en" ? "left" : "right"} open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger onClick={() => setIsOpen(true)}>
          <RiMenu4Fill className="text-foreground font-bold text-2xl cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <ul className="flex flex-col gap-8 px-1">
              {links.map((link) => (
                <li key={link.link}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `cursor-pointer text-primary ${isActive ? "font-bold" : ""}`
                    }
                    onClick={() => setIsOpen(false)} // ✅ إغلاق القائمة عند النقر على الرابط
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li
                className={`flex ${lang === "ar" ? "" : " flex-row-reverse"} items-center gap-2 hover:text-blue-600 text-gray-600 cursor-pointer`}
                onClick={toggleLanguage}
              >
                {lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              </li>
            </ul>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose onClick={() => setIsOpen(false)}>
              <Button variant="outline">
                <IoClose />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Menu;
