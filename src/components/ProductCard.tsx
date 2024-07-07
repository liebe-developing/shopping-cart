import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { IoIosAdd } from "react-icons/io";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

const ProductCard = ({
  id,
  name,
  description,
  price,
  imgUrl,
}: ProductCardProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="card h-[388px] card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={imgUrl}
          alt="Shoes"
          className="h-[200px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{name}</h2>
          <h3 className="ml-2 text-gray-600">{formatCurrency(price)}</h3>
        </div>
        <p className="text-gray-600 text-[16px] mt-2">{description}</p>
        {quantity === 0 ? (
          <button
            className="btn btn-primary mt-auto w-full"
            onClick={() => increaseCartQuantity(id)}
          >
            <IoIosAdd className="text-white w-[1.8rem] h-[1.8rem]" />
            Add To Cart
          </button>
        ) : (
          <div className="flex items-center justify-between gap-2 mt-3">
            <div className="flex items-center justify-center gap-2">
              <button
                className="btn btn-primary"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div className="text-xl">
                <span>{quantity}</span> in cart
              </div>
              <button
                className="btn btn-primary"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-error text-white"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
