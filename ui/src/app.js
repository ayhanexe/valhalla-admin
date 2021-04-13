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
  FileSystemPage = React.lazy(() => import("./pages/fileSystem.page"));

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
  ${({ theme }) => theme.body}
  padding: 0 2vmax 0 2vmax;
  overflow-x: hidden;
  overflow-y: auto;
`;

const AppContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 60px;
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
          <AppContent id="app-content">
            <Header />
            <CustomScrollbar>
              <React.Suspense fallback={<p>Loading...</p>}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/test" component={TestPage} />
                  <Route path="/valhalla-chat" component={ValhallaChatPage} />
                  <Route path="/file-system" component={FileSystemPage} />
                </Switch>
              </React.Suspense>
            </CustomScrollbar>
          </AppContent>
          <RightSidebar />
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
