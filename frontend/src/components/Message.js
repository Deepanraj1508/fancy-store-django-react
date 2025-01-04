/* REACT BOOTSTRAP */
import { Alert } from "react-bootstrap";
import "./styles/Message.css"; // Make sure to import the CSS file

export default function Message({ variant, children }) {
  return (
    <Alert variant={variant} className="custom-alert">
      {children}
    </Alert>
  );
}
