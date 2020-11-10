import React from "react";
import "./OpeningHours.css";

function OpeningHours() {
  return (
    <section className="openingHours" id="openingHours">
      <div className="openingHours__content">
        <header className="openingHours__contentHeader">
          <h2>ÖFFNUNGSZEITEN</h2>
        </header>
        <p>&nbsp;</p>
        <p>Liebe Gäste</p>
        <p>&nbsp;</p>
        <p>
          unser Restaurant ist von Montag bis Samstag ab 16 Uhr für Sie
          geöffnet. Wir nehmen Reservierungen für bis zu 6 Personen entgegen.
        </p>
        <p>&nbsp;</p>
        <p>
          Wir bitten Sie, uns etwaige Änderungen rechtzeitig mitzuteilen und
          unbedingt pünktlich zu erscheinen – kurzfristige Änderungen der
          Personenzahl oder Reservierungszeit sind leider nicht möglich.
        </p>
        <p>&nbsp;</p>
        <p>
          Zu Ihrem Schutz beträgt der Mindestabstand zwischen den Tischen 1,5 m.
          Wir bitten Sie, diesen Abstand zu Personen außerhalb Ihrer
          Reservierung einzuhalten, vor allem beim Betreten oder Verlassen des
          Restaurants. Unsere Service-Mitarbeiter tragen einen Mund-Nasen Schutz
          und desinfizieren ihre Hände und Arbeitsgeräte regelmäßig. Wir
          bedanken uns für Ihre Unterstützung!
        </p>
        <p>&nbsp;</p>
        <p>Ihr Team des React Koch</p>
      </div>
      <div className="openingHours__image"></div>
    </section>
  );
}

export default OpeningHours;
