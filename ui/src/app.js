import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Header,
  LeftSidebar,
  RightSidebar,
  TimeoutScreen,
  CustomScrollbar,
} from "./components";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";
import { ThemeService, FontService } from "./services";

const HomePage = React.lazy(() => import("./pages/home.page")),
  TestPage = React.lazy(() => import("./pages/test.page")),
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
  NotFoundPage = React.lazy(() => import("./pages/404.page"));

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
  
  ${({ theme }) => theme?.body ? {...theme?.body} : null}
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
  }
  render() {
    return (
      <ThemeProvider
        theme={Object(themeService.getTheme(this.props.currentTheme))}
      >
        <Container
          id="app-container"
          $fontFamily={this.props.fontFamily}
          $fontWeight={this.fontService.safeFont(this.props.fontWeight)}
          $fontSize={this.props.fontSize}
        >
          <TimeoutScreen />
          <LeftSidebar />
          <CustomScrollbar>
            <AppContent id="app-content" className="px-4">
              <Header />
              <React.Suspense fallback={<p>Loading...</p>}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/test" component={TestPage} />
                  <Route path="/valhalla-chat" component={ValhallaChatPage} />
                  <Route path="/file-system" component={FileSystemPage} />
                  <Route path="/ui/accordion" component={UIAccordionPage} />
                  <Route path="/ui/buttons" component={UIButtonsPage} />
                  <Route path="/ui/cards" component={UICardsPage} />
                  <Route path="/ui/alerts" component={UIAlertsPage} />
                  <Route path="/ui/badge" component={UIBadgePage} />
                  <Route path="/ui/breadcrumbs" component={UIBreadcrumbsPage} />
                  <Route path="/ui/carousel" component={UICarouselPage} />
                  <Route path="/ui/collapse" component={UICollapsePage} />
                  <Route path="/ui/lists" component={UIListsPage} />
                  <Route path="/ui/modals" component={UIModalsPage} />
                  <Route path="/ui/navntab" component={UINavNTabPage} />
                  <Route path="/ui/navbar" component={UINavbarPage} />
                  <Route path="/ui/offcanvas" component={UIOffCanvasPage} />
                  <Route path="/ui/progress-bars" component={UIProgressPage} />
                  <Route path="/ui/scrollspy" component={UIScrollspyPage} />
                  <Route path="/ui/spinners" component={UISpinnersPage} />
                  <Route path="/ui/toasts" component={UIToastsPage} />
                  <Route path="/ui/ratios" component={UIRatiosPage} />
                  <Route path="/typography" component={TypographyPage} />
                  <Route path="/pages/404" component={NotFoundPage} />
                  <Route
                    path="/tables/standart"
                    component={TablesStandartPage}
                  />
                  <Route
                    path="/tables/plugin-tables"
                    component={TablesPluginPage}
                  />
                </Switch>
              </React.Suspense>
            </AppContent>
          </CustomScrollbar>
          <RightSidebar />
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);
