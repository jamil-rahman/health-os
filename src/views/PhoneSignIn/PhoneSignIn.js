import "./phonesingin.css";
import "react-phone-number-input/style.css";
import { Form, Alert, Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../context/AuthContext";

export default function PhoneSignIn() {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  let navigate = useNavigate();

  const getOTP = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  return (
    <div className="phone-container">
      <div className="p-4 box">
        <h2 className="mb-3 text-center">Log In</h2>

        {/* if there is an error verifying, sends alert */}

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={getOTP} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="BD"
              placeholder="Enter Phone Number"
              value={number}
              onChange={setNumber}
            />

            {/* renders recaptcha when sent for otp */}
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="danger">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="info">
              Send OTP
            </Button>
          </div>
        </Form>

        <Form>
          <Form.Group
            className="mb-3"
            controlId="formBasicOtp"
            style={{ display: flag ? "block" : "none" }}
          >
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            {/* Had to use onClick because for some reason when using onSubmit,
            the useNavigate hook was not working and navigating to home page */}
            <Button type="submit" variant="success" onClick={verifyOTP}>
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
