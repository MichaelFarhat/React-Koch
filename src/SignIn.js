import React, { useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import { handleChangedEmail, handleInvalidEmail, signIn } from "./userUtils";
import "./SignIn.css";

function SignIn() {
  const [{ showSignIn }, dispatch] = useDataLayerValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      id="signIn"
      onSubmit={(event) =>
        signIn(event, dispatch, email, password, setEmail, setPassword)
      }
      className={`signIn ${showSignIn ? "active" : ""}`}
    >
      <div className="signIn__close close">
        <i className="fas fa-window-close close"></i>
      </div>
      <h2>Anmelden</h2>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <form className="signIn__form">
        <div className="signIn__formField">
          <label htmlFor="signInEmail">Email </label>
          <div>
            <input
              type="email"
              id="signInEmail"
              value={email}
              onChange={(event) => handleChangedEmail(event, setEmail)}
              onInvalid={(event) => handleInvalidEmail(event)}
            />
            <p className="invalidEmail">Ungültige E-Mail-Adresse</p>
            <p className="signIn__failureMessage">
              ! Geben Sie Ihre E-Mail-Adresse
            </p>
          </div>
        </div>

        <div className="signIn__formField">
          <label htmlFor="signInPassword">Password </label>
          <div>
            <input
              type="password"
              id="signInPassword"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="signIn__failureMessage">! Geben Sie Ihr Passwor</p>
          </div>
        </div>

        <button type="submit">SignIn</button>
      </form>
    </div>
  );
}

export default SignIn;
