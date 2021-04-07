import FontService from "../fontService/fontService";
import * as actions from "./actions";

export const baseReducer = (state, payload) => {
  switch (payload.type) {
    case actions.OPEN_LOCKSCREEN:
      return {
        ...state,
        isLockScreenOpen: true,
      };
    case actions.CLOSE_LOCKSCREEN:
      return {
        ...state,
        isLockScreenOpen: false,
      };
    case actions.CHANGE_FONT_WEIGHT:
      return {
        ...state,
        fontWeight: new FontService().weightFromIndex(payload.data),
      };
    case actions.CHANGE_FONT:
      return {
        ...state,
        fontFamily: new FontService().fontFromIndex(payload.data).name,
      };
    case actions.CHANGE_THEME:
      return {
        ...state,
        currentTheme: payload.data,
      };
    case actions.TOGGLE_LEFT_SIDEBAR:
      return {
        ...state,
        isLeftSidebarOpen: payload.data,
      };
    case actions.TOGGLE_RIGHT_SIDEBAR:
      return {
        ...state,
        isRightSidebarOpen: payload.data,
      };
    case actions.TOGGLE_FIXED_LEFT_SIDEBAR:
      return {
        ...state,
        toggleFixedLeftSidebar: payload.data,
      };
    // Error cases
    case actions.REQUEST_TOGGLE_LOCKSCREEN_ERROR:
      return {
        ...state,
        toggleLockScreenError: payload.data,
      };
    case actions.TOGGLE_FIXED_LEFT_SIDEBAR_ERROR:
      return {
        ...state,
        toggleFixedLeftSidebarError: payload.data,
      };
    case actions.CHANGE_FONT_WEIGHT_ERROR:
      return {
        ...state,
        fontServiceError: payload.data,
      };
    case actions.CHANGE_FONT_ERROR:
      return {
        ...state,
        fontServiceError: payload.data,
      };
    case actions.TOGGLE_LEFT_SIDEBAR_ERROR:
      return {
        ...state,
        toggleLeftSidebarError: payload.data,
      };
    case actions.CHANGE_THEME_ERROR:
      return {
        ...state,
        themeServiceError: payload.data,
      };
    default:
      return state;
  }
};
