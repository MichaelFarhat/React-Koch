import { auth, db } from "./firebase";
import { ActionTypes } from "./reducer";

const manageSiblingsClass = (current, siblingClassName, className, action) => {
  const target = current.parentNode.querySelector("." + siblingClassName);
  if (target) {
    if (action === "add") {
      current.classList.add("active");
      target.classList.add(className);
    } else if (action === "remove") {
      current.classList.remove("active");
      target.classList.remove(className);
    }
  }
};

export const handleChangedPassword = (event, setPassword) => {
  const { value } = event.target;
  const { target } = event;
  if (value.length >= 6) {
    manageSiblingsClass(target, "signUp__invalidPassword", "active", "remove");
  }
  setPassword(value);
};

export const handleChangedEmail = (event, setEmail) => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const { value } = event.target;
  const { target } = event;
  if (pattern.test(value)) {
    manageSiblingsClass(target, "invalidEmail", "active", "remove");
  }
  setEmail(value);
};

export const handleInvalidEmail = (event) => {
  event.preventDefault();
  const { currentTarget } = event;

  manageSiblingsClass(currentTarget, "invalidEmail", "active", "add");
  manageSiblingsClass(
    currentTarget,
    "signIn__failureMessage",
    "active",
    "remove"
  );
  manageSiblingsClass(
    currentTarget,
    "signUp__failureMessage",
    "active",
    "remove"
  );
};

export const signIn = (
  event,
  dispatch,
  email,
  password,
  setEmail,
  setPassword
) => {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll("input");
  const message = document.querySelector(".message h2");

  let isSignable = true;
  inputs.forEach((input) => {
    manageSiblingsClass(input, "signIn__failureMessage", "active", "remove");

    if (!input.value) {
      if (input.id === "signInEmail") {
        manageSiblingsClass(input, "invalidEmail", "active", "remove");
      }
      isSignable = false;
      manageSiblingsClass(input, "signIn__failureMessage", "active", "add");
    }
  });

  if (isSignable) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        dispatch({
          type: ActionTypes.SET_USER,
          user: cred.user,
        });
        message.textContent = "Du Bist Erfolgreich Angemeldet.";
        message.style.color = "#218c74";
      })
      .catch((err) => {
        message.textContent = err.message;
        message.style.color = "#b33939";
      })
      .finally(() => dispatch({ type: ActionTypes.SHOW_MESSAGE }));
    setEmail("");
    setPassword("");
  }
};

export const signUp = (
  event,
  dispatch,
  email,
  password,
  passwordRepeat,
  firstName,
  lastName,
  telephonNr,
  setEmail,
  setPassword,
  setPasswordRepeat,
  setFirstName,
  setLastName,
  setTelephonNr
) => {
  event.preventDefault();

  const form = event.target;
  const inputs = form.querySelectorAll("input");
  const message = document.querySelector(".message h2");

  let isSignable = true;
  inputs.forEach((input) => {
    manageSiblingsClass(input, "signUp__failureMessage", "active", "remove");
    manageSiblingsClass(input, "signUp__passwordFailure", "active", "remove");

    if (input.id === "signUpPassword" && password.length < 6) {
      manageSiblingsClass(input, "signUp__invalidPassword", "active", "add");
    }
    if (!input.value) {
      if (input.id === "signUpPassword") {
        manageSiblingsClass(
          input,
          "signUp__invalidPassword",
          "active",
          "remove"
        );
      }
      if (input.id === "signUpEmail") {
        manageSiblingsClass(input, "invalidEmail", "active", "remove");
      }
      if (input.id !== "signUpPasswordRepeat") {
        isSignable = false;
        manageSiblingsClass(input, "signUp__failureMessage", "active", "add");
      } else if (password && input.id === "signUpPasswordRepeat") {
        manageSiblingsClass(input, "signUp__failureMessage", "active", "add");
      }
    }
  });
  if (isSignable && password === passwordRepeat) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        dispatch({
          type: ActionTypes.SET_USER,
          user: cred.user,
        });
        db.collection(cred.user.uid).add({
          firstName,
          lastName,
          telephonNr,
        });
        message.textContent = "Du Bist Erfolgreich Registrieren Worden.";
        message.style.color = "#218c74";
      })
      .catch((err) => {
        message.textContent = err.message;
        message.style.color = "#b33939";
      })
      .finally(() => dispatch({ type: ActionTypes.SHOW_MESSAGE }));
    setEmail("");
    setPassword("");
    setPasswordRepeat("");
    setFirstName("");
    setLastName("");
    setTelephonNr("");
  } else if (password && passwordRepeat && password !== passwordRepeat) {
    document.querySelector(".signUp__passwordFailure").classList.add("active");
  }
};

export const customTelephNr = (event, telephonNr, setTelephonNr) => {
  let { value } = event.target;
  if (!Number.isNaN(Number(value[value.length - 1])) || value.length === 0) {
    if (event.type === "keydown") {
      if (event.key === "Backspace") {
        if (value.length === 4) value = value.slice(0, 3);
        if (value.length === 9) value = value.slice(0, 8);
        if (value.length === 13) value = value.slice(0, 12);
      }
      if (event.key !== "Backspace") {
        if (value.length === 3) value += " ";
        if (value.length === 8) value += " ";
        if (value.length === 12) value += " ";
      }
      setTelephonNr(value);
    }
    if (
      (value > telephonNr && value[value.length - 1] !== " ") ||
      value < telephonNr
    )
      setTelephonNr(value);
  }
};

export const signOut = (event, dispatch) => {
  auth.signOut().then((user) => {
    dispatch({ type: ActionTypes.DELETE_USER });
  });
};

export const booking = (
  event,
  dispatch,
  firstName,
  lastName,
  telephonNr,
  date,
  hour,
  setFirstName,
  setLastName,
  setTelephonNr,
  setDate,
  setHour
) => {
  event.preventDefault();
  const message = document.querySelector(".message h2");
  if ((firstName, lastName, telephonNr, date, hour)) {
    message.textContent =
      "Ihre Reservierung Ist Bei Uns Erfolgreich Gekommen. Wir Warten Auf Sie Am " +
      date +
      "; Um " +
      hour;
    message.style.color = "#b33939";
    setFirstName("");
    setLastName("");
    setTelephonNr("");
    setDate("");
    setHour("");
    dispatch({
      type: ActionTypes.SHOW_MESSAGE,
    });
  }
};
