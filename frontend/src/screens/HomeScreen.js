import React, { useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
import "./styles/HomeScreen.css"; // Import custom CSS

function HomeScreen({ history }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, page, pages, loading, error } = productList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
<header class="masthead">
  <div class="container">
    <div class="masthead-subheading">Welcome To Our Studio!</div>
    <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
    <a class="btn btn-primary btn-xl text-uppercase" href="">Tell Me More</a>
  </div>
</header>
      <section id="about" className="about">
        <Container>
          <h2>About Us</h2>
          <p>
            We are dedicated to bringing you high-quality products at the best
            prices. Our mission is to provide a seamless shopping experience
            with excellent customer support.
          </p>
        </Container>
      </section>

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

          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}

      <section id="contact" className="contact">
        <Container>
          <h2>Get in Touch</h2>
          <p>
            Have questions? Feel free to reach out to us! We'd love to hear from
            you.
          </p>
          <Button href="mailto:contact@store.com" variant="success">
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default HomeScreen;
