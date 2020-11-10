import React, { useEffect } from "react";
import { genrateHeaderPadding, makeSlideShow } from "./styleUtils";
import "./Header.css";

function Header() {
  useEffect(() => {
    window.addEventListener("load", () => {
      genrateHeaderPadding();

      const options = [...document.querySelectorAll(".header__option")];

      let index = options.findIndex((option) =>
        option.classList.contains("active")
      );

      let interval = setInterval(() => {
        if (index < 2) index++;
        else index = 0;
        makeSlideShow(index);
      }, 5000);

      options.forEach((option) =>
        option.addEventListener("click", () => {
          if (index < 2) index++;
          else index = 0;
          makeSlideShow(index);
          clearInterval(interval);
          interval = setInterval(() => {
            if (index < 2) index++;
            else index = 0;
            makeSlideShow(index);
          }, 5000);
        })
      );

      const trackers = [
        ...document.querySelector(".header__trackers").children,
      ];
      trackers.forEach((tracker, _index) =>
        tracker.addEventListener("click", () => {
          _index--;
          if (_index < 2) _index++;
          else _index = 0;
          makeSlideShow(_index);
          clearInterval(interval);
          interval = setInterval(() => {
            if (_index < 2) _index++;
            else _index = 0;
            makeSlideShow(_index);
          }, 5000);
        })
      );
    });
  }, []);

  return (
    <header className="header" id="header">
      <div className="header__option one active">
        <div className="active">
          <h2>Vielfältig</h2>
          <p>
            In unserem Restaurant gibt es eine gute Menge von vielfältigen und
            wechselreichen Gerichten.
          </p>
        </div>
      </div>
      <div className="header__option two">
        <div>
          <h2>International</h2>
          <p>
            Wir öffnen die Türen für Sie auf Spezialitäten aus der ganzen Welt.
          </p>
        </div>
      </div>
      <div className="header__option three">
        <div>
          <h2>Es Schmeckt!</h2>
          <p>
            Die Mitarbeiter in Unserem Restaurant sind für Ihre Zufriedenheit
            da. Unsere viele Köche machen den besten Brei.
          </p>
        </div>
      </div>
      <div className="header__trackers">
        <i className="far fa-circle active" data-name="one"></i>
        <i className="far fa-circle" data-name="two"></i>
        <i className="far fa-circle" data-name="three"></i>
      </div>
    </header>
  );
}

export default Header;
