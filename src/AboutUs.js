import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutUs" id="aboutUs">
      <header className="aboutUs__header">
        <h2>ÜBER ÜNS</h2>
      </header>
      <p>&nbsp;</p>
      <div className="aboutUs__content">
        <div className="aboutUs__contentLeft">
          <p>Bei uns ist Sind Sie in guten Händen.</p>
          <p>&nbsp;</p>

          <p>
            In unserem Restaurant treffen sich leckere Spezialitäten aus den
            ganzen Welt.
          </p>
          <p>&nbsp;</p>
          <p>Unsere Pasten und Saucen sind alle hausgemacht.</p>
        </div>
        <div className="aboutUs__contentCenter">
          <p>Unser Fleisch, Fisch und Gemüse beziehen wir von den</p>
          <p>folgenden nachhaltigen Lieferanten:</p>
          <p>Markthalle IX</p>
          <p>Odefey & Töchter</p>
          <p>Künstlichkeiten</p>
          <p>B.E.S.H</p>
          <p>Müritzhof</p>
        </div>

        <div className="aboutUs__contentRight">
          <p>&nbsp;</p>
          <p>React Koch wurde 2019 mit einem</p>
          <p>&nbsp;</p>
          <p>Michelin Stern ausgetzeihnet.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
