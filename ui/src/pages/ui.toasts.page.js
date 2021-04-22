import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { TutorialComponents as tc } from "../components";

class UIToastsPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Toasts</tc.TutorialTitle>
        <ReactTooltip />
        <div className="row p-o m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Basic</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                To encourage extensible and predictable toasts, we recommend a
                header and body. Toast headers use <code>display: flex</code>,
                allowing easy alignment of content thanks to our margin and
                flexbox utilities.
                <br />
                <br />
                Toasts are as flexible as you need and have very little required
                markup. At a minimum, we require a single element to contain
                your “toasted” content and strongly encourage a dismiss button.
              </tc.TutorialBlockText>
              <div
                className="toast fade show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <svg
                    className="bd-placeholder-img rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>

                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body text-dark">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Translucent</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Toasts are slightly translucent, too, so they blend over
                whatever they might appear over.
              </tc.TutorialBlockText>
              <div
                className="toast fade show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <img src="..." className="rounded me-2" alt="..." />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">11 mins ago</small>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body text-dark">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Stacking</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                You can stack toasts by wrapping them in a toast container,
                which will vertically add some spacing.
              </tc.TutorialBlockText>
              <div className="toast-container">
                <div
                  className="toast fade show"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">just now</small>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="toast-body text-dark">
                    See? Just like this.
                  </div>
                </div>

                <div
                  className="toast fade show"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">2 seconds ago</small>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="toast-body text-dark">
                    Heads up, toasts will stack automatically
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Custom content</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Customize your toasts by removing sub-components, tweaking with
                utilities, or adding your own markup. Here we’ve created a
                simpler toast by removing the default <code>.toast-header</code>
                , adding a custom hide icon from Bootstrap Icons, and using some
                flexbox utilities to adjust the layout.
              </tc.TutorialBlockText>
              <div
                className="toast fade show text-dark align-items-center"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="d-flex">
                  <div className="toast-body">
                    Hello, world! This is a toast message.
                  </div>
                  <button
                    type="button"
                    className="btn-close me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <tc.TutorialBlockText className="my-2">
                Alternatively, you can also add additional controls and
                components to toasts.
              </tc.TutorialBlockText>
              <div
                className="toast fade show text-dark"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-body">
                  Hello, world! This is a toast message.
                  <div className="mt-2 pt-2 border-top">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mx-1"
                    >
                      Take action
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm mx-1"
                      data-bs-dismiss="toast"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Examples</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Hover over the buttons below to see the four tooltips
                directions: top, right, bottom, and left. Directions are
                mirrored when using Bootstrap in RTL.
              </tc.TutorialBlockText>
              <button
                type="button"
                className="btn btn-secondary btn-sm m-2"
                data-place="top"
                data-effect="solid"
                data-tip="Tooltip on top"
              >
                Tooltip on top
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm m-2"
                data-place="right"
                data-effect="solid"
                data-tip="Tooltip on right"
              >
                Tooltip on right
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm m-2"
                data-place="bottom"
                data-effect="solid"
                data-tip="Tooltip on bottom"
              >
                Tooltip on bottom
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm m-2"
                data-place="left"
                data-effect="solid"
                data-tip="Tooltip on left"
              >
                Tooltip on left
              </button>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIToastsPage;
