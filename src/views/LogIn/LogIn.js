import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./login.css";
export default function LogIn() {
  return (
    <div className="login">
      <h2 className="mb-3">Welcome to Mano Super Market</h2>
      <Link to="/phonesignin">
        <div className=" mt-4">
          <Button variant="success" type="Submit" className="btn">
            Sign in with Phone Number
          </Button>
        </div>
      </Link>
    </div>
  );
}
