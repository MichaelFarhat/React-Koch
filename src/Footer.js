import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src="./images/logo2.png" alt="logo" />
        <p>React Koch ist ein Restaurant in Hannover.</p>
        <p>Copyright © 2020 React Koch GmbH. Alle Rechte vorbehalten.</p>
      </div>
      <div className="footer__text">
        <div className="footer__center">
          <h2>Posteingang Und Adresse:</h2>
          <p>React Koch</p>
          <p>Klausenerweg 2</p>
          <p>30519 Hannover</p>
        </div>
        <div className="footer__right">
          <h2>Kontaktieren Sie Uns Unter:</h2>
          <p>+49 17 8848 767 1</p>
          <p>michaelfarhat19@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
