import ProductsList from "../components/ProductsList";

const Store = () => {
  return (
    <div className="px-3 py-5 w-full">
      <h1 className="text-3xl mb-5">Store</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-5">
        <ProductsList />
      </div>
    </div>
  );
};

export default Store;
