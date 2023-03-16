import { useEffect, useState } from "react";
const useGetProducts = (API) => {
  const [products, setProducts] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    getProducts();
  }, []);

  return products;
};

export default useGetProducts;
