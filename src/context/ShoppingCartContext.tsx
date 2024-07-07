import { createContext, ReactNode, useContext, useState } from "react";
import ProductDrawer from "../components/ProductDrawer";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface CartItem {
  id: number;
  quantity: number;
}

interface ShoppingCartContextType {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const InitialShoppingCartContext: ShoppingCartContextType = {
  openCart: () => {},
  closeCart: () => {},
  getItemQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  cartQuantity: 0,
  cartItems: [],
  isOpen: false,
};

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  InitialShoppingCartContext
);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider(props: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart", []
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    const item = cartItems.find((item) => item.id === id);
    return item ? item?.quantity : 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const item = currItems.find((item) => item.id === id);
      if (item) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { id, quantity: 1 }];
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const item = currItems.find((item) => item.id === id);
      if (item?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  const contextValue: ShoppingCartContextType = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    cartQuantity,
    isOpen,
  };
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {props.children}
      <ProductDrawer isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
