import gsap from "gsap/all";
import * as actions from "./actions";
import { all, put, takeLatest } from "redux-saga/effects";
import { FontService, store } from "..";
import { default as ValhallaUtils } from "../utils/utils";

// Utils
class SagaUtils {
  get state() {
    return store.getState();
  }
  get header() {
    return document.querySelector("#header");
  }
  get app() {
    return document.querySelector("#app-content");
  }
  get appContainer() {
    return document.querySelector("#app-container");
  }
  get leftSidebar() {
    return document.querySelector("#left-sidebar");
  }
  get rightSidebar() {
    return document.querySelector("#right-sidebar");
  }
  get lockScreen() {
    return document.querySelector("#lock-screen");
  }
  get rightSidebarTogglerIcon() {
    return this.rightSidebar.querySelector("#right-sidebar-toggler-icon");
  }
  get leftSidebarTogglerIcon() {
    return this.leftSidebar.querySelector("#left-sidebar-toggler-icon");
  }
}

const utils = new SagaUtils();
const valhallaUtils = new ValhallaUtils();

function* changeTheme(payload) {
  try {
    yield put({
      type: actions.CHANGE_THEME,
      data: payload.data,
    });
  } catch (error) {
    yield put({
      type: actions.CHANGE_THEME_ERROR,
      data: error.message,
    });
  }
}

function* openRightSidebar() {
  try {
    const rightSidebar = utils.rightSidebar;
    const timeline = gsap.timeline();

    utils.rightSidebarTogglerIcon.classList.add("active");

    yield timeline.add([
      gsap.to(rightSidebar, {
        right: 0,
        ease: utils.state.rightSidebarOpeningEase,
        duration: utils.state.rightSidebarOpeningDuration,
      }),
    ]);

    yield put({
      type: actions.TOGGLE_RIGHT_SIDEBAR,
      data: true,
    });
  } catch (error) {
    yield put({
      type: actions.TOGGLE_RIGHT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* closeRightSidebar() {
  try {
    const rightSidebar = utils.rightSidebar;
    const timeline = gsap.timeline();

    utils.rightSidebarTogglerIcon.classList.remove("active");

    yield timeline
      .add([
        gsap.to(rightSidebar, {
          right: -rightSidebar.clientWidth,
          ease: utils.state.rightSidebarClosingEase,
          duration: utils.state.rightSidebarClosingDuration,
        }),
      ])
      .then(() => {
        valhallaUtils.clearStyles(rightSidebar);
      });

    yield put({
      type: actions.TOGGLE_RIGHT_SIDEBAR,
      data: false,
    });
  } catch (error) {
    yield put({
      type: actions.TOGGLE_RIGHT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* toggleRightSidebar() {
  try {
    if (utils.state.isRightSidebarOpen) {
      yield closeRightSidebar();
    } else {
      yield all([openRightSidebar(), closeLeftSidebar()]);
    }
  } catch (error) {
    yield put({
      type: actions.TOGGLE_RIGHT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* openLeftSidebar() {
  try {
    const leftSidebar = utils.leftSidebar;
    const timeline = gsap.timeline();
    const state = utils.state;
    utils.leftSidebarTogglerIcon.classList.add("active");

    yield timeline.add([
      gsap.to(leftSidebar, {
        left: 0,
        ease: utils.state.leftSidebarOpeningEase,
        duration: utils.state.leftSidebarOpeningDuration,
      }),
      state.toggleFixedLeftSidebar
        ? gsap
            .to([utils.app], {
              width: `-=${leftSidebar.clientWidth}`,
              marginLeft: leftSidebar.clientWidth,
              duration: state.leftSidebarOpeningDuration,
              ease: "power.out",
            })
            .then(() => {
              utils.app.classList.add("fixed-left-sidebar-toggled");
            })
        : null,
    ]);

    yield put({
      type: actions.TOGGLE_LEFT_SIDEBAR,
      data: true,
    });
  } catch (error) {
    yield put({
      type: actions.TOGGLE_LEFT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* closeLeftSidebar() {
  try {
    const leftSidebar = utils.leftSidebar;
    const state = utils.state;
    const timeline = gsap.timeline();

    utils.leftSidebarTogglerIcon.classList.remove("active");

    yield timeline
      .add([
        gsap.to(leftSidebar, {
          left: -leftSidebar.clientWidth,
          ease: utils.state.leftSidebarClosingEase,
          duration: utils.state.leftSidebarClosingDuration,
        }),
        state.toggleFixedLeftSidebar &&
        state.isLeftSidebarOpen &&
        utils.app.classList.contains("fixed-left-sidebar-toggled")
          ? gsap
              .to(utils.app, {
                width: `+=${leftSidebar.clientWidth}`,
                marginLeft: 0,
                duration: state.leftSidebarClosingDuration,
                ease: "power.out",
              })
              .then(() => {
                valhallaUtils.clearStyles(utils.app);
                utils.app.classList.remove("fixed-left-sidebar-toggled");
              })
          : null,
      ])
      .then(() => {
        if (leftSidebar) {
          valhallaUtils.clearStyles(leftSidebar);
        }
        if (utils.header) {
          valhallaUtils.clearStyles(utils.header);
        }
        if (utils.app) {
          valhallaUtils.clearStyles(utils.app);
        }
        if (utils.appContainer) {
          valhallaUtils.clearStyles(utils.appContainer);
        }
      });

    yield put({
      type: actions.TOGGLE_LEFT_SIDEBAR,
      data: false,
    });
  } catch (error) {
    yield put({
      type: actions.TOGGLE_LEFT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* toggleLeftSidebar() {
  try {
    if (utils.state.isLeftSidebarOpen) {
      yield closeLeftSidebar();
    } else {
      yield all([closeRightSidebar(), openLeftSidebar()]);
    }
  } catch (error) {
    yield put({
      type: actions.TOGGLE_LEFT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* changeFont(payload) {
  try {
    const fontService = new FontService();
    fontService.dynamicLink.setAttribute("href", fontService.localFont.href);
    yield put({
      type: actions.CHANGE_FONT,
      data: payload.data,
    });
  } catch (error) {
    yield put({
      type: actions.CHANGE_FONT_ERROR,
      data: error.message,
    });
  }
}

function* changeFontWeight(payload) {
  try {
    yield put({
      type: actions.CHANGE_FONT_WEIGHT,
      data: payload.data,
    });
  } catch (error) {
    yield put({
      type: actions.CHANGE_FONT_WEIGHT_ERROR,
      data: error.message,
    });
  }
}

function* toggleFixedLeftSidebar() {
  try {
    yield valhallaUtils.setLocal(
      valhallaUtils.fixedLeftSidebarLocalName,
      utils.state.toggleFixedLeftSidebar ? false : true
    );
    yield put({
      type: actions.TOGGLE_FIXED_LEFT_SIDEBAR,
      data: utils.state.toggleFixedLeftSidebar ? false : true,
    });
  } catch (error) {
    yield put({
      type: actions.TOGGLE_FIXED_LEFT_SIDEBAR_ERROR,
      data: error.message,
    });
  }
}

function* openLockScreen() {
  try {
    const timeline = gsap.timeline();
    const lockScreen = utils.lockScreen;
    const state = utils.state;
    yield timeline
      .add([
        gsap.to(lockScreen, {
          top: 0,
          y: 0,
          duration: state.lockScreenOpeningDuration,
          ease: state.lockScreenOpeningEase,
        }),
      ])
      .then(() => valhallaUtils.clearStyles(lockScreen));
    yield put({
      type: actions.OPEN_LOCKSCREEN,
    });
  } catch (error) {
    yield put({
      type: actions.REQUEST_TOGGLE_LOCKSCREEN_ERROR,
      data: error.message,
    });
  }
}

function* closeLockScreen() {
  try {
    const timeline = gsap.timeline();
    const lockScreen = utils.lockScreen;
    const state = utils.state;
    yield timeline
      .add([
        gsap.to(lockScreen, {
          top: `-${lockScreen.clientHeight}`,
          duration: state.lockScreenClosingDuration,
          ease: state.lockScreenClosingEase,
        }),
      ])
      .then(() => valhallaUtils.clearStyles(lockScreen));
    yield put({
      type: actions.CLOSE_LOCKSCREEN,
    });
  } catch (error) {
    yield put({
      type: actions.REQUEST_TOGGLE_LOCKSCREEN_ERROR,
      data: error.message,
    });
  }
}

function* toggleLockScreen() {
  const state = utils.state;
  if (state.isLockScreenOpen) {
    yield closeLockScreen();
  } else {
    yield openLockScreen();
  }
}

// Watchers
function* watchLockScreenToggle() {
  yield takeLatest(actions.REQUEST_TOGGLE_LOCKSCREEN, toggleLockScreen);
}
function* watchOpenLockScreen() {
  yield takeLatest(actions.REQUEST_OPEN_LOCKSCREEN, openLockScreen);
}
function* watchCloseLockScreen() {
  yield takeLatest(actions.REQUEST_CLOSE_LOCKSCREEN, closeLockScreen);
}

function* watchToggleFixedLeftSidebar() {
  yield takeLatest(
    actions.TOGGLE_FIXED_LEFT_SIDEBAR_REQUESTED,
    toggleFixedLeftSidebar
  );
}

function* watchFontWeight() {
  yield takeLatest(actions.CHANGE_FONT_WEIGHT_REQUESTED, changeFontWeight);
}

function* watchFontFamily() {
  yield takeLatest(actions.CHANGE_FONT_REQUESTED, changeFont);
}

function* watchLeftSidebarToggle() {
  yield takeLatest(actions.TOGGLE_LEFT_SIDEBAR_REQUESTED, toggleLeftSidebar);
}

function* watchRightSidebarToggle() {
  yield takeLatest(actions.TOGGLE_RIGHT_SIDEBAR_REQUESTED, toggleRightSidebar);
}

function* watchChangeTheme() {
  yield takeLatest(actions.CHANGE_THEME_REQUESTED, (payload) =>
    changeTheme(payload)
  );
}

function* baseSaga() {
  yield all([
    watchChangeTheme(),
    watchLeftSidebarToggle(),
    watchRightSidebarToggle(),
    watchToggleFixedLeftSidebar(),
    watchFontFamily(),
    watchFontWeight(),
    watchLockScreenToggle(),
    watchOpenLockScreen(),
    watchCloseLockScreen(),
  ]);
}

export default baseSaga;
