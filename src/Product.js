import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// taking the arguments as a props
function Product({ id, title, price, rating, image }) {
  // pull the data from data layer
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>" ,basket);

  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="img" className="product__image" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
