export const ActionTypes = {
  SET_USER: "SET_USER",
  SET_USER_INFO: "SET_USER_INFO",
  DELETE_USER: "DELETE_USER",
  CHANGE_ACTIVE_LINK: "CHANGE_ACTIVE_LINK",
  SHOW_SIGN_IN: "SHOW_SIGN_IN",
  SHOW_SIGN_UP: "SHWO_SIGN_UP",
  SHOW_MESSAGE: "SHOW_MESSAGE",
  CLOSE_MODULES: "CLOSE_MODULES",
};

export const initialState = {
  user: null,
  userInfo: {
    firstName: null,
    lastName: null,
    telephonNr: null,
    activeLink: null,
  },
  showSignIn: false,
  showSignUp: false,
  showMessage: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ActionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };

    case ActionTypes.DELETE_USER:
      return {
        ...state,
        user: null,
        userInfo: null,
      };

    case ActionTypes.CHANGE_ACTIVE_LINK:
      return {
        ...state,
        activeLink: action.activeLink,
      };

    case ActionTypes.SHOW_SIGN_IN:
      return {
        ...state,
        showMessage: false,
        showSignUp: false,
        showSignIn: true,
      };

    case ActionTypes.SHOW_SIGN_UP:
      return {
        ...state,
        showMessage: false,
        showSignIn: false,
        showSignUp: true,
      };

    case ActionTypes.CLOSE_MODULES:
      return {
        ...state,
        showMessage: false,
        showSignIn: false,
        showSignUp: false,
      };

    case ActionTypes.SHOW_MESSAGE:
      return {
        ...state,
        showSignUp: false,
        showSignIn: false,
        showMessage: true,
      };

    default: {
      return state;
    }
  }
};
