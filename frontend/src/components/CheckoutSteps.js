import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/CheckoutSteps.css"; // Import custom styles

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center checkout-steps mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link className="active-step">Login</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="disabled-step">Login</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link className="active-step">Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="disabled-step">Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link className="active-step">Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="disabled-step">Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link className="active-step">Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="disabled-step">Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
