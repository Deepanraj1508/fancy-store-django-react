import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import "./styles/HomeScreen.css"; // Import custom CSS

function HomeScreen({ history }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, page, pages, loading, error } = productList;

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  

  useEffect(() => {
    dispatch(listProducts(history.location.search));

    const offerEndTime = new Date().getTime() + 24 * 60 * 60 * 1000; 
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndTime - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, history.location.search]);

  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <button className="btn btn-primary btn-xl text-uppercase" onClick={() => history.push("/about")}>
      Tell Me More
    </button>
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

      <section id="offer" className="offer-section">
        <Container>
          <div className="offer-container">
            <h2 className="offer-heading">Exclusive Offer!</h2>
            <p className="offer-description">
              Grab your favorite products at an unbeatable price! Hurry, the offer ends in:
            </p>
            <div className="countdown-timer">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
            <Button variant="success" className="shop-now-btn">
              Shop Now
            </Button>
          </div>
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

          <Paginate page={page} pages={pages} keyword={history.location.search} />
        </div>
      )}

      <section id="contact" className="contact-section">
        <Container>
          <div className="contact-container">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-description">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
            </p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="Your first name" />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email address" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject of your message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HomeScreen;
