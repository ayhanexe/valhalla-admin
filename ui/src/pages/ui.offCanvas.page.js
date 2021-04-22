import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIOffCanvasPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap OffCanvas</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Offcanvas components
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Below is an offcanvas example that is shown by default (via
                <code>.show</code> on <code>.offcanvas</code>). Offcanvas
                includes support for a header with a close button and an
                optional body class for some initial
                <code>padding</code>. We suggest that you include offcanvas
                headers with dismiss actions whenever possible, or provide an
                explicit dismiss action.
              </tc.TutorialBlockText>
              <a
                className="btn btn-primary btn-sm m-2"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Link with href
              </a>
              <button
                className="btn btn-primary btn-sm m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                Button with data-bs-target
              </button>

              <div
                className="offcanvas offcanvas-start bg-dark"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div className="dropdown mt-3">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
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
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Placement</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                There’s no default placement for offcanvas components, so you
                must add one of the modifier classes below;
                <ul>
                  <li>
                    <code>.offcanvas-start</code> places offcanvas on the left
                    of the viewport (shown above)
                  </li>
                  <li>
                    <code>.offcanvas-end</code> places offcanvas on the right of
                    the viewport
                  </li>
                  <li>
                    <code>.offcanvas-bottom</code> places offcanvas on the
                    bottom of the viewport
                  </li>
                </ul>
                Try the right and bottom examples out below.
                <br />
              </tc.TutorialBlockText>
              <button
                className="btn btn-primary btn-sm m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Toggle right offcanvas
              </button>
              <div
                className="offcanvas offcanvas-end bg-dark"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">...</div>
              </div>
              <button
                className="btn btn-primary btn-sm m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
                aria-controls="offcanvasBottom"
              >
                Toggle bottom offcanvas
              </button>

              <div
                className="offcanvas offcanvas-bottom bg-dark"
                tabindex="-1"
                id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                    Offcanvas bottom
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body small">...</div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Backdrop</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Scrolling the <code>{`<body>`}</code> element is disabled when
                an offcanvas and its backdrop are visible. Use the
                <code>data-bs-scroll</code> attribute to toggle{" "}
                <code>{`<body>`}</code> scrolling and{" "}
                <code>data-bs-backdrop</code> to toggle the backdrop.
              </tc.TutorialBlockText>
              <button
                className="btn btn-primary btn-sm m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                Enable body scrolling
              </button>
              <button
                className="btn btn-primary btn-sm m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              >
                Enable backdrop (default)
              </button>
              <button
                className="btn btn-primary btn-sm m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                Enable both scrolling & backdrop
              </button>

              <div
                className="offcanvas offcanvas-start bg-dark"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabindex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    Colored with scrolling
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start bg-dark"
                tabindex="-1"
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBackdropLabel"
                  >
                    Offcanvas with backdrop
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <p>.....</p>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start bg-dark"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Backdroped with scrolling
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIOffCanvasPage;
