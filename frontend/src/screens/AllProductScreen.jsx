import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import "./styles/HomeScreen.css"; // Import custom CSS

function AllProductScreen({ history }) {


  const productList = useSelector((state) => state.productList);
  const { products, page, pages, loading, error } = productList;

  return (
    <div>
      <h1 id="products">Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate page={page} pages={pages} keyword={history.location.search} />
        </div>
      )}
    </div>
  );
}

export default AllProductScreen;
