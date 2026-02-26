import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { AppContextProvider } from "./lib/providers/app-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContextProvider>
      <Provider>
        <App />
      </Provider>
    </AppContextProvider>
  </BrowserRouter>,
);
