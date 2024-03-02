import { ProductType } from "../../types/Types";
// SIngle product card Component
export default function SingleCard({ name, price, image }: ProductType) {
  // Display a Card with custom parameters {Image, Title, Price}
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={require(`../../assets/img/${image}.png`)} alt={name} />
      </div>
      <div className="product-card__info">
        <a className="product-card__info__title" href="#/">
          <h3>{name}</h3>
        </a>
        <p>{price.toLocaleString()} $</p>
      </div>
    </div>
  );
}
