import './App.css'
import './index.css'
import { useLanguageSelector } from './stores/Reducers/LanguageSlice';
import { RouterProvider } from "react-router-dom";
import router from "@/routes/Routes";
import { ThemeProvider } from './providers/ThemeProvider';
function App() {
  const { lang } = useLanguageSelector((state) => state.LanguageReducer);

  return (
    <div dir={lang === "en" ? "ltr" : "rtl"} >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
    </div>
  );
}

export default App
