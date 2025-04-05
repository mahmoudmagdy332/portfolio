import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollHeader from "./ScrollHeader";
// import {  IoLogoWhatsapp } from "react-icons/io5";

// import ThreeDotsWave from "@/components/layout/Loading";
import ScrollToTop from "@/components/layout/ScrollToTop";

function Layout() {
  // const {isLoading}=useGetSetting()
  
  const [showScrollHeader, setShowScrollHeader] = useState(false);
  // const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHeader(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   if (isLoading) {
//     return(
//       <div className="flex h-screen justify-center items-center">
//         <ThreeDotsWave/>
// </div>

//   )}
  return (
    <div className="relative bg-secondary">
      <Header />
      {showScrollHeader && <ScrollHeader />}
      <main className="min-h-screen">
      <ScrollToTop />

        <Outlet />
      </main>
      <Footer />
      {/* <div 
        className={`fixed bottom-4 right-8 z-50 ${showTooltip ? 'tooltip tooltip-open tooltip-left' : ''}`}
        data-tip="whatsapp us"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=966570143032&text&type=phone_number&app_absent=0"
          className="block text-white rounded-full  hover:text-green-700 transition duration-300"
        >
          <div className="bg-green-500  rounded-lg p-1 hover:shadow-md shadow-black">

          <IoLogoWhatsapp size={40} className="" />
          </div>
        </a>
      </div> */}
 
    </div>
  );
}

export default Layout;