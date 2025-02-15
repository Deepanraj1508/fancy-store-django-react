import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, createProductReview } from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import "./styles/ProductScreen.css";

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  // const { success: successProductReview, loading: loadingProductReview, error: errorProductReview } = productReviewCreate;
  const { success: successProductReview} = productReviewCreate;
// 

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (rating === 0 || comment === "") {
      alert("Please provide a rating and review.");
    } else {
      dispatch(createProductReview(match.params.id, { rating, comment }));
    }
  };

  return (
    <div className="new-product-screen">
      <Link to="/" className="back-button">Go Back</Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="product-container">
          <div className="product-header">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2>{product.name}</h2>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#ffcc00" />
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        
          <div className="product-actions">
            <div className="action-card">
              <p>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
              {product.countInStock > 0 && (
                <select
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="quantity-select"
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="add-to-cart-btn"
                disabled={product.countInStock === 0}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="reviews-section">
            <h3>Reviews</h3>
            {product.reviews.length === 0 && <Message variant="info">No Reviews</Message>}
            <div className="reviews">
              {product.reviews.map((review) => (
                <div key={review._id} className="review-card">
                  <strong>{review.name}</strong>
                  <Rating value={review.rating} color="#ffcc00" />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
            <div className="review-form">
              <h4>Write a Review</h4>
              {userInfo ? (
                <form onSubmit={submitHandler}>
                  <label>Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="review-select"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                  <label>Comment</label>
                  <textarea
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="review-textarea"
                  ></textarea>
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              ) : (
                <Message variant="info">
                  Please <Link to="/login">Login</Link> to write a review.
                </Message>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
