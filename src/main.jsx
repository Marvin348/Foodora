import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
        {/* <App />  Die App muss dann raus, weil es im router ist*/}
      </FavoritesProvider>
    </CartProvider>
  </StrictMode>
);
