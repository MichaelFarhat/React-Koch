import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <header className="contact__header">
        <h2>KONTAKT</h2>
      </header>
      <p>&nbsp;</p>
      <div className="contact__content">
        <div className="contact__contentOptions">
          <div className="contact__contentOptionOne">
            <h2>Adresse Und Posteingang:</h2>
            <p>&nbsp;</p>
            <p>React Koch</p>
            <p>Klausenerweg 2</p>
            <p>30519 Hannover</p>
          </div>
          <p>&nbsp;</p>
          <div className="contact__contentOptionTwo">
            <h2>E-Mail-Adresse Und Telefonnummer:</h2>
            <p>&nbsp;</p>
            <p>michaelfarhat19@gmail.com</p>
            <p>+49 17 8848 767 1</p>
          </div>
        </div>
        <div className="contact__contentBackground"></div>
      </div>
    </section>
  );
}

export default Contact;
