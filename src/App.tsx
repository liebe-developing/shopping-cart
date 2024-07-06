import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

export function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <main className="bg-base-200">
        <Outlet />
      </main>
    </ShoppingCartProvider>
  );
}
