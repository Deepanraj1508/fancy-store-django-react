import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css"; // Import the custom CSS

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Welcome to ProShop! We offer the best quality products at
              affordable prices. Your satisfaction is our priority.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>Copyright &copy; {new Date().getFullYear()} ProShop. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
