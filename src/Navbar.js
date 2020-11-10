import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import { auth, db } from "./firebase";
import { ActionTypes } from "./reducer";
import { signOut } from "./userUtils";
import "./Navbar.css";
import {
  closeOpenModules,
  genrateHeaderPadding,
  highlightLink,
  setActiveLinks,
  showNavbar,
  styleHighlight,
} from "./styleUtils";
import SmoothScroll from "smooth-scroll";

function Navbar() {
  const [{ userInfo, activeLink }, dispatch] = useDataLayerValue();
  const [showSignOUt, setShowSignOut] = useState(true);

  useEffect(() => {
    const smooth = new SmoothScroll(".navbar  > a");
    const highlight = document.querySelector(".navbar__highlight");
    window.addEventListener("scroll", (event) => {
      setActiveLinks(event, highlight, dispatch);
    });
  }, []);
  useEffect(() => {
    const triggers = document.querySelectorAll(".navbar a ");
    const highlight = document.querySelector(".navbar__highlight");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("resize", (event) => {
      styleHighlight(event, highlight, activeLink ? activeLink : undefined);
      genrateHeaderPadding();
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", (event) => {
        const userLink = [...document.querySelectorAll(".navbar__user a")];
        if (userLink.includes(trigger)) {
          highlightLink(event, highlight, userLink);
        } else {
          highlightLink(event, highlight);
        }
      });

      trigger.addEventListener("click", () => {
        const unWantedLinks = [...document.querySelectorAll(".navbar__user a")];
        showNavbar();

        if (!unWantedLinks.includes(trigger))
          dispatch({
            type: ActionTypes.CHANGE_ACTIVE_LINK,
            activeLink: trigger,
          });
      });

      trigger.addEventListener("mouseleave", (event) => {
        styleHighlight(event, highlight, activeLink ? activeLink : undefined);
      });
    });

    const userLinks = document.querySelectorAll(".navbar__userLink");
    const closeSigns = document.querySelectorAll(
      ".signIn__close,.signUp__close,.message__close"
    );
    if (closeSigns.length) {
      closeSigns.forEach((closeSign) =>
        closeSign.addEventListener("click", (event) => {
          closeOpenModules(event, dispatch);
        })
      );
    }
    if (userLinks.length)
      userLinks.forEach((userLink) =>
        userLink.addEventListener("click", (event) => {
          closeOpenModules(event, dispatch);
        })
      );
  }, [showSignOUt, activeLink]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: ActionTypes.SET_USER,
          user,
        });
        setShowSignOut(true);
        db.collection(user.uid)
          .get()
          .then((snapshot) => {
            let userInfo = snapshot.docs[0]?.data();
            dispatch({
              type: ActionTypes.SET_USER_INFO,
              userInfo,
            });
            styleHighlight(
              null,
              document.querySelector(".navbar__highlight"),
              activeLink
            );
          });
      } else {
        setShowSignOut(false);
      }
    });
  }, [activeLink]);

  return (
    <nav className="navbar">
      <span className="navbar__highlight"></span>
      <a href="#header" className="navbar__logo" data-name="header">
        <img
          src="./images/logo1.png"
          alt="logo"
          className="navbar__logoImage"
        />
      </a>
      <a href="#openingHours" data-name="openingHours">
        Öffnungszeiten
      </a>
      <a href="#aboutUs" data-name="aboutUs">
        Über Uns
      </a>
      <a href="#menu" data-name="menu">
        Menü
      </a>
      <a href="#booking" data-name="booking">
        Reservierung
      </a>
      <a href="#contact" data-name="contact">
        Kontakt
      </a>
      <div className="navbar__user">
        <a href="#">
          Hallo {userInfo?.firstName} <i className="fas fa-angle-down"></i>
        </a>
        <div className="navbar__userDropdown">
          {showSignOUt ? (
            <a href="#signout" onClick={(event) => signOut(event, dispatch)}>
              Abmelden
            </a>
          ) : (
            <>
              <a className="navbar__userLink" href="#signIn" data-name="signIn">
                Anmelden
              </a>
              <a className="navbar__userLink" href="#signUp" data-name="signUp">
                Registrieren
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
