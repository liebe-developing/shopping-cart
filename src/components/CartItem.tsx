import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../dummy/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (!item) return null;

  return (
    <div className="flex gap-2 items-center">
      <img
        src={item.imgUrl}
        title={item.name}
        className="w-[125px] h-[75px] min-w-[125px] min-h-[75px] object-cover"
      />
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <div>
            {item.name}
            {quantity > 1 && (
              <span className="text-[.65rem] text-gray-600"> x{quantity}</span>
            )}
          </div>
          <div className="text-[.75rem] text-gray-600">
            {formatCurrency(item.price)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-[.95rem] text-gray-800">
            {formatCurrency(item.price * quantity)}
          </div>
          <button
            className="btn hover:btn-error size-2"
            onClick={() => removeFromCart(id)}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
