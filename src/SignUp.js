import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import {
  customTelephNr,
  handleChangedEmail,
  handleChangedPassword,
  handleInvalidEmail,
  signUp,
} from "./userUtils";
import "./SignUp.css";
import { ActionTypes } from "./reducer";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephonNr, setTelephonNr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [{ showSignUp }, dispatch] = useDataLayerValue();

  return (
    <div id="signUp" className={`signUp ${showSignUp ? "active" : ""}`}>
      <h2>Registrieren</h2>
      <div className="signUp__close close">
        <i className="fas fa-window-close close"></i>
      </div>
      <form
        className="signUp__form"
        onSubmit={(event) =>
          signUp(
            event,
            dispatch,
            email,
            password,
            passwordRepeat,
            firstName,
            lastName,
            telephonNr,
            setEmail,
            setPassword,
            setPasswordRepeat,
            setFirstName,
            setLastName,
            setTelephonNr
          )
        }
      >
        <div className="signUp__formField">
          <label htmlFor="signUpFirstName">Vorname</label>
          <div>
            <input
              type="text"
              id="signUpFirstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <p className="signUp__failureMessage">
              ! Geben Sie Ihren Vornamen ein
            </p>
          </div>
        </div>

        <div className="signUp__formField">
          <label htmlFor="signUpLastName">Nachname </label>
          <div>
            <input
              type="text"
              id="signUpLastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <p className="signUp__failureMessage">
              ! Geben Sie Ihren Nachnamen ein
            </p>
          </div>
        </div>

        <div className="signUp__formField">
          <label htmlFor="signUpTelephonNr">Telefon-Nr. </label>
          <div>
            <input
              type="text"
              id="signUpTelephonNr"
              value={telephonNr}
              onKeyDown={(event) =>
                customTelephNr(event, telephonNr, setTelephonNr)
              }
              onChange={(event) =>
                customTelephNr(event, telephonNr, setTelephonNr)
              }
            />
            <p className="signUp__failureMessage">
              ! Geben Sie Ihre TelefonNr. ein
            </p>
          </div>
        </div>

        <div className="signUp__formField">
          <label htmlFor="signUpEmail">E-Mail </label>
          <div>
            <input
              type="email"
              id="signUpEmail"
              value={email}
              onChange={(event) => handleChangedEmail(event, setEmail)}
              onInvalid={(event) => handleInvalidEmail(event)}
            />
            <p className="invalidEmail">Ungültige E-Mail-Adresse</p>
            <p className="signUp__failureMessage">
              ! Geben Sie Ihre E-Mail-Adresse ein
            </p>
          </div>
        </div>

        <div className="signUp__formField">
          <label htmlFor="signUpPassword">Passwort </label>
          <div>
            <input
              type="password"
              id="signUpPassword"
              value={password}
              onChange={(event) => handleChangedPassword(event, setPassword)}
            />
            <p className="signUp__invalidPassword">
              Passwörter müssen mindestens 6 Zeichen lang sein.
            </p>
            <p className="signUp__failureMessage">
              ! Geben Sie Ihr Passwort ein
            </p>
          </div>
        </div>

        <div className="signUp__formField">
          <label htmlFor="signUpPasswordRepeat">
            Passwort nochmals eingeben
          </label>
          <div>
            <input
              type="password"
              id="signUpPasswordRepeat"
              value={passwordRepeat}
              onChange={(event) => setPasswordRepeat(event.target.value)}
            />
            <p className="signUp__failureMessage">
              ! Geben Sie Ihr Passwort nochmals ein
            </p>
            <p className="signUp__passwordFailure">
              ! Passwörter stimmen nicht überein
            </p>
          </div>
        </div>

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
