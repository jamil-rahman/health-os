import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/config";


export function setUpRecaptha(number) {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {},
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, number, recaptchaVerifier);
}
