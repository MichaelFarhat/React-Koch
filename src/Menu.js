import React, { useEffect } from "react";
import "./Menu.css";

function Menu() {
  useEffect(() => {
    window.addEventListener("load", () => {
      const menuSites = document.querySelectorAll(".menu__site");
      const sitesContainer = document.querySelector(".menu__sites");
      menuSites.forEach((site) => {
        site.addEventListener("mouseenter", () => {
          if (site.classList.contains("one")) {
            sitesContainer.dataset.image = "one";
          } else if (site.classList.contains("two")) {
            sitesContainer.dataset.image = "two";
          } else sitesContainer.dataset.image = "three";
        });
      });
    });
  }, []);

  return (
    <section className="menu one" id="menu">
      <header className="menu__header">
        <h2>MENÜ</h2>
      </header>
      <p>&nbsp;</p>
      <div className="menu__message">
        <p>Unser saisonal wechselndes Menü besteht aus </p>
        <p>Gerichten aus der ganzen Welt.</p>
      </div>
      <p>&nbsp;</p>
      <div className="menu__sites">
        <article className="menu__site one">
          <header className="menu__siteHeader">
            <h2>Vorspeisen</h2>
          </header>
          <p>Vietnamesische Sommerrollen Mit Erdnuss-Sausce</p>
          <p>Vietnamesische Glasnudelsalat Mit Granelen</p>
          <p>Palak Paneer Rezept Aus Indien</p>
          <p>Mücver - Rezept Für Türkische Zucchinipuffer</p>
          <p>Hummus - Originalrezept Aus Syrien</p>
          <p>Türkische Gemüsesuppe Mit Hackbällchen</p>
          <p>Lomi Lomi - Hawaiianischer Lachssalat</p>
          <p>Pikanter Thailändischer Spargelsalat</p>
          <p>Bruschetta Mit Ricotta Und Weintrauben</p>
          <p>Gözleme Mit Spinat Und Schafskäse</p>
          <p>Französische Maronensuppe</p>
          <p>Mezze: Grüne Bohnen Aus Dem Ofen</p>
        </article>
        <article className="menu__site two">
          <header className="menu__siteHeader">
            <h2>Hauptgänge</h2>
          </header>
          <p>Köttbullar Aus Schweden</p>
          <p>Tarte Tatin Aus Frankreich</p>
          <p>Scones Aus Großbritannien</p>
          <p>Bigoli In Salsa Aus Venedig</p>
          <p>Ragu Alla Bolognese Aus Bologna</p>
          <p>Piroggen Aus Polen</p>
          <p>Paprikasch Mit Ungarischen NocklerIn Aus Budapest</p>
          <p>Tiropita Aus Griechenland</p>
          <p>Laap - Das Laotische Nationalgericht</p>
          <p>Paprikasch Mit Ungarischen Nockerln</p>
          <p>Stir Fry Mit Rindfleisch Und Brokkoli</p>
          <p>Vietnamesisches Rindfleisch Mit Zwiebeln</p>
        </article>
        <article className="menu__site three">
          <header className="menu__siteHeader">
            <h2>Dessert</h2>
          </header>
          <p>Mixed Berry Mousse</p>
          <p>Mango And Coconut Souffle</p>
          <p>Matcha Cake</p>
          <p>Vegan Schokolade Cake</p>
          <p>Praline Und Ganache Cake</p>
          <p>Blondie Mit Vanilla Ice Cream</p>
          <p>Tee Und Herbal Tee Ice Cream</p>
        </article>
      </div>
    </section>
  );
}

export default Menu;
