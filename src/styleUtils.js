import { ActionTypes } from "./reducer";

export const highlightLink = (event, highlight, userLink) => {
  const linkCoords = event.target.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top,
    left: linkCoords.left,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
  if (userLink) {
    highlight.style.boxShadow = "unset";
  } else {
    highlight.style.boxShadow = " 0 0 10px rgba(0, 0, 0, 0.2) ";
  }
};

export const styleHighlight = (
  event,
  highlight,
  target = document.querySelector(".navbar__logo")
) => {
  const linkCoords = target.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top,
    left: linkCoords.left,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
};

export const genrateHeaderPadding = () => {
  const navbar = document.querySelector(".navbar");
  const parent = document.querySelector(".app__contentMain");
  const trackers = document.querySelector(".header__trackers");
  const children = [...parent.children];

  if (window.innerWidth >= 855) {
    children.forEach(
      (child) => (child.style.paddingTop = navbar.offsetHeight + "px")
    );
    trackers.style.bottom = 0;
  } else {
    children.forEach((child) => (child.style.paddingTop = 50 + "px"));
    trackers.style.bottom = 60 + "px";
  }
};

export const setActiveLinks = (event, highlight, dispatch) => {
  const sections = [...document.querySelector(".app__contentMain").children];
  const links = [...document.querySelectorAll(".navbar > a")];
  const navbar = document.querySelector(".navbar");
  const scroll = window.scrollY;
  let index;

  if (scroll > sections[0].offsetHeight / 2) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  sections.forEach((child, _index) => {
    const { offsetTop, offsetHeight } = child;
    if (child.id === "booking" && scroll >= offsetTop - offsetHeight / 1.5) {
      sections[_index].classList.add("passed");
    }
    if (scroll >= offsetTop - offsetHeight / 4) {
      index = _index;
    }
  });
  sections[index].classList.add("passed");
  const link = links.find((link) => link.dataset.name === sections[index].id);
  if (link) {
    styleHighlight(event, highlight, link);
    dispatch({
      type: ActionTypes.CHANGE_ACTIVE_LINK,
      activeLink: link,
    });
  }
};

export const makeSlideShow = (index) => {
  const options = [...document.querySelectorAll(".header__option")];
  const trackers = [...document.querySelector(".header__trackers").children];
  const texts = document.querySelectorAll(".header__option>div");
  options.forEach((option) => option.classList.remove("active"));
  options[index].classList.add("active");
  trackers.forEach((tracker) => tracker.classList.remove("active"));
  trackers[index].classList.add("active");
  setTimeout(() => {
    texts.forEach((text) => text.classList.remove("active"));
    texts[index].classList.add("active");
  }, 1000);
};

export const closeOpenModules = (event, dispatch) => {
  if (event.currentTarget.dataset.name === "signIn") {
    dispatch({
      type: ActionTypes.SHOW_SIGN_IN,
    });
  } else if (event.currentTarget.dataset.name === "signUp") {
    dispatch({
      type: ActionTypes.SHOW_SIGN_UP,
    });
  } else if (event.currentTarget.classList.contains("close")) {
    dispatch({
      type: ActionTypes.CLOSE_MODULES,
    });
  }
};

export const showNavbar = (event) => {
  const navbar = document.querySelector(".navbar");
  const navbarButton = document.querySelector(".app__bar");
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    navbarButton.style.marginTop = 0;
  } else {
    navbar.classList.add("active");
    navbarButton.style.marginTop = navbar.offsetHeight + "px";
  }
};
