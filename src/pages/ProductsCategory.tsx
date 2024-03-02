import "./_categoryPage.scss";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Filter from "../components/FilterComponent/FilterComponent";
import MainCard from "../components/MainCardComponent/MainCardComponent";
import {
  CategoryPageProps,
  FilterPropsType,
  ProductType,
} from "../types/Types";

// Api url
const BIKESAPI: string =
  "https://challenges.brainster.tech/ajax_data/data.json";

// Main products category page Component
export default function ProductsCategory({ categoryName }: CategoryPageProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [listProducts, setListProducts] = useState<ProductType[]>(products);

  // Get the current products from API
  useEffect(() => {
    axios
      .get(BIKESAPI)
      .then((res: AxiosResponse) => {
        setProducts(res.data.products);
        setListProducts(res.data.products);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const filterProps: FilterPropsType = {
    updateProducts: setListProducts,
    productsList: products,
  };

  return (
    <section className="products-wrapper">
      <h1 className="products-wrapper__title">{categoryName}</h1>
      <Filter {...filterProps} />
      <MainCard products={listProducts} />
    </section>
  );
}
