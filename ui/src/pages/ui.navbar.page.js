import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UINavbarPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Navbars</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Navbar</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Here’s what you need to know before getting started with the
                navbar:
                <br />
                <ul>
                  <li>
                    Navbars require a wrapping .navbar with{" "}
                    <code>{`.navbar-expand{-sm|-md|-lg|-xl|-xxl}`}</code> for
                    responsive collapsing and color scheme classes.
                  </li>
                  <li>
                    Navbars and their contents are fluid by default. Change the
                    container to limit their horizontal width in different ways.
                  </li>
                  <li>
                    Use our spacing and flex utility classes for controlling
                    spacing and alignment within navbars.
                  </li>
                  <li>
                    Navbars are responsive by default, but you can easily modify
                    them to change that. Responsive behavior depends on our
                    Collapse JavaScript plugin.
                  </li>
                  <li>
                    Ensure accessibility by using a <code>{`<nav>`}</code>{" "}
                    element or, if using a more generic element such as a{" "}
                    <code>{`<div>`}</code>, add a <code>role="navigation"</code>{" "}
                    to every navbar to explicitly identify it as a landmark
                    region for users of assistive technologies.
                  </li>
                  <li>
                    Indicate the current item by using{" "}
                    <code>aria-current="page"</code> for the current page or{" "}
                    <code>aria-current="true"</code> for the current item in a
                    set.
                  </li>
                </ul>
              </tc.TutorialBlockText>
              <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a className="dropdown-item" href="/">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="/"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Image</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                You can replace the text within the <code>.navbar-brand</code>{" "}
                with an <code>{`<img>`}</code>.
              </tc.TutorialBlockText>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                  <a className="navbar-brand" href="/">
                    <img
                      src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                      alt=""
                      width="30"
                      height="24"
                    />
                  </a>
                </div>
              </nav>
              <tc.TutorialBlockTitle className="mt-4">
                Image and text
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                You can also make use of some additional utilities to add an
                image and text at the same time. Note the addition of
                <code>.d-inline-block</code> and <code>.align-text-top</code> on
                the
                <code>{`<img>`}</code>.
              </tc.TutorialBlockText>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    <img
                      src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                      alt=""
                      width="30"
                      height="24"
                      className="d-inline-block align-text-top me-3"
                    />
                    Bootstrap
                  </a>
                </div>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Forms</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Place various form controls and components within a navbar:
              </tc.TutorialBlockText>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input
                      className="form-control bg-dark text-light me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Color schemes</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Theming the navbar has never been easier thanks to the
                combination of theming classes and <code>background-color</code>{" "}
                utilities. Choose from <code>.navbar-light</code> for use with
                light background colors, or <code>.navbar-dark</code> for dark
                background colors. Then, customize with
                <code>.bg-*</code> utilities.
              </tc.TutorialBlockText>
              <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a className="dropdown-item" href="/">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="/"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
              <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a className="dropdown-item" href="/">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="/"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-danger" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
              <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a className="dropdown-item" href="/">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="/"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-warning" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>External content</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Sometimes you want to use the collapse plugin to trigger a
                container element for content that structurally sits outside of
                the <code>.navbar</code> . Because our plugin works on the{" "}
                <code>id</code> and
                <code>data-bs-target</code> matching, that’s easily done!
              </tc.TutorialBlockText>
              <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                  <h5 className="text-white h4">Collapsed content</h5>
                  <span className="text-muted">
                    Toggleable via the navbar brand.
                  </span>
                </div>
              </div>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </nav>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UINavbarPage;
