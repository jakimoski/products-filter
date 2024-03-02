import { ProductType, ProductsList } from "../../types/Types";
import SingleCard from "./SingleCardComponent";
// Product lists component
export default function MainCard({ products }: ProductsList) {
  // Display a list of Cards  from arr from products state /// take products as param
  return (
    <div className="main-card-wrapper">
      {products
        ? products.map((el: ProductType, idx) => (
            <SingleCard key={idx} {...el} />
          ))
        : null}
    </div>
  );
}
