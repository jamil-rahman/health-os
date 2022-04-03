import { createContext, useContext } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase/config";

const authContext = createContext();

export function AuthContextProvider({ children }) {

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  return (
    <authContext.Provider
      value={{
        setUpRecaptha,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(authContext);
}
