import { useShoppingCart } from "../context/ShoppingCartContext";
import { IoCloseOutline } from "react-icons/io5";

const ProductDrawer = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      ></div>
      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out z-[555] ${
          isOpen ? "animate-slideIn" : "animate-slideOut"
        }`}
      >
        <button
          onClick={closeCart}
          className="pr-10 flex justify-end w-full rounded m-4"
        >
          <IoCloseOutline className="w-9 h-9" />
        </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Drawer Content</h2>
          <p>This is the content of the drawer.</p>
        </div>
      </div>
    </>
  );
};

export default ProductDrawer;
