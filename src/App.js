import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import OpeningHours from "./OpeningHours";
import AboutUs from "./AboutUs";
import Booking from "./Booking";
import Menu from "./Menu";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Contact from "./Contact";
import Message from "./Message";
import { showNavbar } from "./styleUtils";

function App() {
  return (
    <div className="app">
      <Message />
      <SignUp />
      <SignIn />
      <div className="app__bar" onClick={(event) => showNavbar(event)}>
        <i className="fas fa-bars"></i>
      </div>
      <div className="app__content">
        <Navbar />
        <main className="app__contentMain">
          <Header />
          <OpeningHours />
          <AboutUs />
          <Menu />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
