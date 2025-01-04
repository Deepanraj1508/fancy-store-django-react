import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./styles/Product.css"; // Import custom styles

function Product({ product }) {
  return (
    <Card className="product-card my-3 p-3 rounded shadow">
      <Link to={`/product/${product._id}`} className="product-image-link">
        <Card.Img className="product-image" src={product.image} alt={product.name} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="product-title-link">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </Card.Text>

        <Card.Text as="h3" className="product-price">
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
