import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIAlertsPage extends Component {
  render() {
    return (
      <div className="container">
        <tc.TutorialTitle>Bootstrap Alerts</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Examples</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Alerts are available for any length of text, as well as an
                optional close button. For proper styling, use one of the eight
                required contextual classes (e.g., <code>.alert-success</code>).
                For inline dismissal, use the alerts JavaScript plugin.
              </tc.TutorialBlockText>
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <div className="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
              </div>
              <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div>
              <div className="alert alert-danger" role="alert">
                A simple danger alert—check it out!
              </div>
              <div className="alert alert-warning" role="alert">
                A simple warning alert—check it out!
              </div>
              <div className="alert alert-info" role="alert">
                A simple info alert—check it out!
              </div>
              <div className="alert alert-light" role="alert">
                A simple light alert—check it out!
              </div>
              <div className="alert alert-dark" role="alert">
                A simple dark alert—check it out!
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Link color</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use the <code>.alert-link</code> utility class to quickly
                provide matching colored links within any alert.
              </tc.TutorialBlockText>
              <div className="alert alert-primary" role="alert">
                A simple primary alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-secondary" role="alert">
                A simple secondary alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-success" role="alert">
                A simple success alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-danger" role="alert">
                A simple danger alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-warning" role="alert">
                A simple warning alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-info" role="alert">
                A simple info alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-light" role="alert">
                A simple light alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
              <div className="alert alert-dark" role="alert">
                A simple dark alert with{" "}
                <a href="/" className="alert-link">
                  an example link
                </a>
                . Give it a click if you like.
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Additional content</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Alerts can also contain additional HTML elements like headings,
                paragraphs and dividers.
              </tc.TutorialBlockText>
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Dismissing</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Using the alert JavaScript plugin, it’s possible to dismiss any
                alert inline. Here’s how:
                <br />
                <ul>
                  <li>
                    Be sure you’ve loaded the alert plugin, or the compiled
                    Bootstrap JavaScript.
                  </li>
                  <li>
                    Add a close button and the <code>.alert-dismissible</code>{" "}
                    class, which adds extra padding to the right of the alert
                    and positions the close button.
                  </li>
                  <li>
                    On the close button, add the{" "}
                    <code>data-bs-dismiss="alert"</code> attribute, which
                    triggers the JavaScript functionality. Be sure to use the{" "}
                    <code>{`<button>`}</code> element with it for proper
                    behavior across all devices.
                  </li>
                  <li>
                    To animate alerts when dismissing them, be sure to add the{" "}
                    <code>.fade</code> and <code>.show</code> classes.
                  </li>
                </ul>
                You can see this in action with a live demo:
              </tc.TutorialBlockText>
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIAlertsPage;
