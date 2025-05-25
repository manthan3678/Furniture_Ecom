import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authorization } from "./context/Authorization.jsx";
import { CartProvider } from "./context/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <Authorization>
    <CartProvider>
      <App />
    </CartProvider>
  </Authorization>
);
