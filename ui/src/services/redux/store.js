import { createStore, applyMiddleware, compose } from "redux";
import { baseReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { default as ThemeService } from "../themeService/themeService";
import { default as FontService } from "../fontService/fontService";
import { default as ValhallaUtils } from "../utils/utils";
import createSagaMiddleware from "redux-saga";
import baseSaga from "./sagas";



const fontService = new FontService();
const themeService = new ThemeService();
const valhallaUtils = new ValhallaUtils();

const initialState = {
  currentTheme: themeService.getCurrentThemeIndex(),
  isLeftSidebarOpen: false,
  isRightSidebarOpen: false,

  isLockScreenOpen: false,
  lockScreenOpeningDuration: 0.5,
  lockScreenOpeningEase: "power.out",
  lockScreenClosingDuration: 0.5,
  lockScreenClosingEase: "power.out",

  // Settings
  toggleFixedLeftSidebar:
    localStorage.getItem(valhallaUtils.fixedLeftSidebarLocalName) === "true"
      ? true
      : false,

  fontFamily: fontService.localFontName,
  fontWeight: fontService.localWeight,
  fontSize: "0.85em",

  leftSidebarOpeningDuration: 0.5,
  leftSidebarClosingDuration: 0.5,
  leftSidebarOpeningEase: "power.in",
  leftSidebarClosingEase: "power.out",

  rightSidebarOpeningDuration: 0.5,
  rightSidebarClosingDuration: 0.5,
  rightSidebarOpeningEase: "power.in",
  rightSidebarClosingEase: "power.out",

  // Error Messages
  fontServiceError: null,
  themeServiceError: null,
  toggleRightSidebarError: null,
  toggleLeftSidebarError: null,
  toggleFixedLeftSidebarError: null,
  toggleLockScreenError: null,
};

const sagaMiddleware = createSagaMiddleware();

const _composeWithDevtools = process.env.REACT_APP_VALHALLA_ENV === "development" ? compose(applyMiddleware(sagaMiddleware), composeWithDevTools()) : applyMiddleware(sagaMiddleware)

const store = createStore(
  baseReducer,
  initialState,
  _composeWithDevtools
);

sagaMiddleware.run(baseSaga);

export default store;
