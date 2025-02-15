import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa"; // Import Icons
import "./styles/Product.css"; // Custom CSS

function Product({ product }) {
  return (
    <div className="product-card">
      {/* Product Image Section */}
      <div className="product-image-container">
        <Link to={`/product/${product._id}`}>
          <img className="product-image" src={product.image} alt={product.name} />
        </Link>
        <div className="product-badge">HOT</div> {/* Badge for New/Hot Products */}
      </div>

      {/* Product Details */}
      <div className="product-details">
        <Link to={`/product/${product._id}`} className="product-title-link">
          <h2 className="product-title">{product.name}</h2>
        </Link>
        {/* Price Section */}
        <div className="product-price">
          <span className="old-price">₹{product.oldPrice}</span>
          <span className="new-price">₹{product.price}</span>
        </div>

        {/* Icons for Cart & Wishlist */}
        <div className="product-icons">
          <FaShoppingCart className="cart-icon" title="Add to Cart" />
          <FaHeart className="wishlist-icon" title="Add to Wishlist" />
        </div>
      </div>
    </div>
  );
}

export default Product;
