import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layouts/MainLayout/Index";
import NotFoundLayout from "@/Layouts/NotFound/index";
import Home from "@/pages/Home";
import NotFound from "@/Components/layout/NotFound";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import ContactUs from "@/pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
       
    ],
  },
  {
    path: "*",
    element: <NotFoundLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
