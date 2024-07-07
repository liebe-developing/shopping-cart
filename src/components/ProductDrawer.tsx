import { useShoppingCart } from "../context/ShoppingCartContext";
import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../dummy/items.json";

type ProductDrawerProps = {
  isOpen: boolean;
};

const ProductDrawer = ({ isOpen }: ProductDrawerProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    isOpen && (
      <>
        <div
          className={`z-30 fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeCart}
        ></div>
        <div
          className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-[555] ${
            isOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <button
            onClick={closeCart}
            className="pr-10 flex justify-end w-full rounded m-4"
          >
            <IoCloseOutline className="w-9 h-9" />
          </button>
          <div className="flex flex-col gap-3 p-4">
            {cartItems.length > 0 ? (
              <>
                {cartItems?.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
                <div className="font-bold text-xl mt-4 text-left">
                  Total:
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find(
                        (item) => item.id === cartItem.id
                      );
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center mt-20 text-2xl">
                Cart is Empty!
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default ProductDrawer;
