import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/store.ts";


createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>

    <StrictMode>
      <App />
    </StrictMode>

</ReduxProvider>
)
