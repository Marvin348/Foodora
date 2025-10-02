import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/CartContext.jsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import AppLayout from "./components/AppLayout.jsx";
import HomePage from "./pages/HomePages.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
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
      </FavoritesProvider>
    </CartProvider>
  </StrictMode>
);
