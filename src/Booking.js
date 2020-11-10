import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import { customTelephNr, booking } from "./userUtils";
import "./Booking.css";
import { closeOpenModules } from "./styleUtils";

function Booking() {
  const [{ userInfo, user }, dispatch] = useDataLayerValue();

  const [_firstName, setFirstName] = useState("");
  const [_lastName, setLastName] = useState("");
  const [_telephonNr, setTelephonNr] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    const userLinks = document.querySelectorAll(".booking__userLink");
    if (userLinks.length) {
      userLinks.forEach((userLink) =>
        userLink.addEventListener("click", (event) => {
          closeOpenModules(event, dispatch);
        })
      );
    }
  }, []);

  useEffect(() => {
    if (userInfo?.firstName) {
      const { firstName, lastName, telephonNr } = userInfo;
      setFirstName(firstName);
      setLastName(lastName);
      setTelephonNr(telephonNr);
    } else {
      setFirstName("");
      setLastName("");
      setTelephonNr("");
    }
  }, [userInfo]);

  return (
    <section className="booking" id="booking">
      <header className="booking__header">
        <h2>RESERVIERUNG</h2>
      </header>
      <p>&nbsp;</p>
      <div className={`booking__content ${user ? "" : "noUser"}`}>
        {user ? (
          <form
            className="booking__form"
            onSubmit={(event) =>
              booking(
                event,
                dispatch,
                _firstName,
                _lastName,
                _telephonNr,
                date,
                hour,
                setFirstName,
                setLastName,
                setTelephonNr,
                setDate,
                setHour
              )
            }
          >
            <div className="booking__formField">
              <label
                htmlFor="bookingFirstName"
                className="booking__formFieldOne"
              >
                Vorname{" "}
              </label>
              <input
                className="booking__formFieldOne"
                type="text"
                id="bookingFirstName"
                value={_firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className="booking__formField">
              <label
                htmlFor="bookingLastName"
                className="booking__formFieldTwo"
              >
                Nachname{" "}
              </label>
              <input
                className="booking__formFieldTwo"
                type="text"
                id="bookingLastName"
                value={_lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="booking__formField">
              <label
                htmlFor="bookingTelephonNr"
                className="booking__formFieldThree"
              >
                Telefonnummer{" "}
              </label>
              <input
                className="booking__formFieldThree"
                type="text"
                id="bookingTelephonNr"
                value={_telephonNr}
                onChange={(event) =>
                  customTelephNr(event, _telephonNr, setTelephonNr)
                }
                onKeyDown={(event) =>
                  customTelephNr(event, _telephonNr, setTelephonNr)
                }
              />
            </div>

            <div className="booking__formField">
              <label htmlFor="bookingDate" className="booking__formFieldFour">
                Datum{" "}
              </label>
              <input
                className="booking__formFieldFour"
                type="date"
                id="bookingDate"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>

            <div className="booking__formField">
              <label htmlFor="bookingHour" className="booking__formFieldFive">
                Uhrzeit{" "}
              </label>
              <input
                className="booking__formFieldFive"
                type="time"
                id="bookingHour"
                value={hour}
                onChange={(event) => setHour(event.target.value)}
              />
            </div>

            <button type="submit">Reservieren</button>
          </form>
        ) : (
          <h2 className="booking__signInMessage">
            Bitte{" "}
            <a href="#signIn" className="booking__userLink" data-name="signIn">
              Anmelden
            </a>{" "}
            Oder{" "}
            <a href="#signUp" className="booking__userLink" data-name="signUp">
              Registrieren
            </a>
          </h2>
        )}
      </div>
    </section>
  );
}

export default Booking;
