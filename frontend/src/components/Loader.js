import React from "react";
import { Spinner } from "react-bootstrap";
import './styles/Loader.css'; // Assuming you'll move CSS to a separate file

export default function Loader() {
  return (
    <div className="loader-container">
      <Spinner
        animation="border"
        role="status"
        className="custom-spinner"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
