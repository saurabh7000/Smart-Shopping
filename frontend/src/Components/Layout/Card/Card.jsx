import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link
      to={`/product-detail/${product._id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card-container">
        <div className="product-image">
          <img className="image" src={product.images[0].url} alt="Product" />
        </div>
        <div className="product-detail">
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <p>{product.ratings}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
