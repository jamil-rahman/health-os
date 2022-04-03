import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./login.css";
export default function LogIn() {
  return (
    <div className="login">
      <div className="box mx-auto">
      <h2 className="mb-3 mx-auto my-5">Welcome to Mano Super Market</h2>
      <Link to="/phonesignin">
        <div className=" mt-4 mx-auto">
          <Button variant="success" type="Submit" className="btn">
            Sign in with Phone Number
          </Button>
        </div>
      </Link>
      </div>
    </div>
  );
}
