import storeItems from "../dummy/items.json";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return storeItems.map((item) => <ProductCard key={item.id} {...item} />);
};

export default ProductsList;
