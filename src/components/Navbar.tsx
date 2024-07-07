import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <div className="navbar sticky z-20 top-0 bg-base-100 mt-4 shadow-sm">
      <div className="flex-1">
        <ul className="flex gap-8 px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-gray-600 font-bold" : ""} text-lg uppercase`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-gray-600 font-bold" : ""} text-lg uppercase`
              }
              to="/store"
            >
              Store
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-gray-600 font-bold" : ""} text-lg uppercase`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      {cartQuantity !== 0 && (
        <div className="mr-10">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {cartQuantity}
            </span>
            <button className="btn btn-circle btn-ghost">
              <BsCart onClick={openCart} className="w-[1.2rem] h-[1.2rem]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
