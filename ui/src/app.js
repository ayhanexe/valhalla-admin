import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Header,
  LeftSidebar,
  RightSidebar,
  TimeoutScreen,
  CustomScrollbar,
} from "./components";
import { Switch, Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";
import { ThemeService, FontService } from "./services";

const HomePage = React.lazy(() => import("./pages/home.page")),
  ValhallaChatPage = React.lazy(() => import("./pages/valhalla-chat.page")),
  FileSystemPage = React.lazy(() => import("./pages/fileSystem.page")),
  UIButtonsPage = React.lazy(() => import("./pages/ui.buttons.page")),
  UICardsPage = React.lazy(() => import("./pages/ui.cards.page")),
  UIAccordionPage = React.lazy(() => import("./pages/ui.accordion.page")),
  UIAlertsPage = React.lazy(() => import("./pages/ui.alerts.page")),
  UIBadgePage = React.lazy(() => import("./pages/ui.badge.page")),
  UIBreadcrumbsPage = React.lazy(() => import("./pages/ui.breadcrumbs.page")),
  UICarouselPage = React.lazy(() => import("./pages/ui.carousel.page")),
  UICollapsePage = React.lazy(() => import("./pages/ui.collapse.page")),
  UIListsPage = React.lazy(() => import("./pages/ui.list.page")),
  UIModalsPage = React.lazy(() => import("./pages/ui.modals.page")),
  UINavNTabPage = React.lazy(() => import("./pages/ui.navntab.page")),
  UINavbarPage = React.lazy(() => import("./pages/ui.navbar.page")),
  UIOffCanvasPage = React.lazy(() => import("./pages/ui.offCanvas.page")),
  UIProgressPage = React.lazy(() => import("./pages/ui.progress.page")),
  UIScrollspyPage = React.lazy(() => import("./pages/ui.scrollspy.page")),
  UISpinnersPage = React.lazy(() => import("./pages/ui.spinner.page")),
  UIToastsPage = React.lazy(() => import("./pages/ui.toasts.page")),
  UIRatiosPage = React.lazy(() => import("./pages/ui.ratios.page")),
  TypographyPage = React.lazy(() => import("./pages/typography.page")),
  TablesStandartPage = React.lazy(() => import("./pages/tables.standart.page")),
  TablesPluginPage = React.lazy(() => import("./pages/tables.plugin.page")),
  NotFoundPage = React.lazy(() => import("./pages/404.page")),
  LoginPage = React.lazy(() => import("./pages/login.page")),
  RegisterPage = React.lazy(() => import("./pages/register.page"));

const themeService = new ThemeService();

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  font-family: ${(props) => String(props.$fontFamily).toLowerCase()};
  font-weight: ${(props) => String(props.$fontWeight).toLowerCase()};
  font-size: ${(props) => String(props.$fontSize).toLowerCase()};
  
  ${({ theme }) => theme?.body ? { ...theme?.body } : null}
`;

const AppContent = styled.div`
  width: 100%;
  height: auto;
`;



class App extends Component {
  constructor(props) {
    super(props);

    this.fontService = new FontService();
    this.fontService.init();
    if (localStorage.getItem("valhalla-login") !== "true") {
      this.props.history.push("/auth/login")
    }
  }
  render() {
    const DefaultContent = props => (
      <>
        <TimeoutScreen />
        <LeftSidebar />
        <RightSidebar />
      </>
    );

    return (
      <ThemeProvider
        theme={Object(themeService.getTheme(this.props.currentTheme))
        }
      >
        <Container
          id="app-container"
          $fontFamily={this.props.fontFamily}
          $fontWeight={this.fontService.safeFont(this.props.fontWeight)}
          $fontSize={this.props.fontSize}
        >
          <CustomScrollbar>
            <AppContent id="app-content" className="px-4">
              <React.Suspense fallback={<p>Loading...</p>}>
                <Switch>
                  <Route exact path="/" >
                    <DefaultContent />
                    <Header />
                    <HomePage />
                  </Route>
                  <Route path="ui/valhalla-chat">
                    <DefaultContent />
                    <Header />
                    <ValhallaChatPage />
                  </Route>
                  <Route path="ui/file-system" >
                    <DefaultContent />
                    <Header />
                    <FileSystemPage />
                  </Route>
                  <Route path="ui/ui/accordion">
                    <DefaultContent />
                    <Header />
                    <UIAccordionPage />
                  </Route>
                  <Route path="ui/ui/buttons">
                    <DefaultContent />
                    <Header />
                    <UIButtonsPage />
                  </Route>
                  <Route path="ui/ui/cards">
                    <DefaultContent />
                    <Header />
                    <UICardsPage />
                  </Route>
                  <Route path="ui/ui/alerts">
                    <DefaultContent />
                    <Header />
                    <UIAlertsPage />
                  </Route>
                  <Route path="ui/ui/badge">
                    <DefaultContent />
                    <Header />
                    <UIBadgePage />
                  </Route>
                  <Route path="ui/ui/breadcrumbs">
                    <DefaultContent />
                    <Header />
                    <UIBreadcrumbsPage />
                  </Route>
                  <Route path="ui/ui/carousel">
                    <DefaultContent />
                    <Header />
                    <UICarouselPage />
                  </Route>
                  <Route path="ui/ui/collapse">
                    <DefaultContent />
                    <Header />
                    <UICollapsePage />
                  </Route>
                  <Route path="ui/ui/lists">
                    <DefaultContent />
                    <Header />
                    <UIListsPage />
                  </Route>
                  <Route path="ui/ui/modals">
                    <DefaultContent />
                    <Header />
                    <UIModalsPage />
                  </Route>
                  <Route path="ui/ui/navntab">
                    <DefaultContent />
                    <Header />
                    <UINavNTabPage />
                  </Route>
                  <Route path="ui/ui/navbar">
                    <DefaultContent />
                    <Header />
                    <UINavbarPage />
                  </Route>
                  <Route path="ui/ui/offcanvas">
                    <DefaultContent />
                    <Header />
                    <UIOffCanvasPage />
                  </Route>
                  <Route path="ui/ui/progress-bars">
                    <DefaultContent />
                    <Header />
                    <UIProgressPage />
                  </Route>
                  <Route path="ui/ui/scrollspy">
                    <DefaultContent />
                    <Header />
                    <UIScrollspyPage />
                  </Route>
                  <Route path="ui/ui/spinners">
                    <DefaultContent />
                    <Header />
                    <UISpinnersPage />
                  </Route>
                  <Route path="ui/ui/toasts">
                    <DefaultContent />
                    <Header />
                    <UIToastsPage />
                  </Route>
                  <Route path="ui/ui/ratios">
                    <DefaultContent />
                    <Header />
                    <UIRatiosPage />
                  </Route>
                  <Route path="ui/typography">
                    <DefaultContent />
                    <Header />
                    <TypographyPage />
                  </Route>
                  <Route path="/pages/404">
                    <NotFoundPage />
                  </Route>
                  <Route
                    path="/tables/standart"
                  >
                    <DefaultContent />
                    <Header />
                    <TablesStandartPage />
                  </Route>
                  <Route
                    path="/tables/plugin-tables"
                  >
                    <DefaultContent />
                    <Header />
                    <TablesPluginPage />
                  </Route>
                  <Route exact path="/auth/login" component={LoginPage} />
                  <Route exact path="/auth/register" component={RegisterPage} />
                </Switch>
              </React.Suspense>
            </AppContent>
          </CustomScrollbar>
        </Container>
      </ThemeProvider >
    );
  }
}

const mapStateToProps = (state) => state;
const ReduxApp = connect(mapStateToProps)(App);
export default withRouter(ReduxApp);
