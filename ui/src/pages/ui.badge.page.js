import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIBadgePage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Badges</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Example</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Badges scale to match the size of the immediate parent element
                by using relative font sizing and <code>em</code> units. As of
                v5, badges no longer have focus or hover styles for links.
              </tc.TutorialBlockText>
              <h1>
                Example heading <span className="badge bg-secondary">New</span>
              </h1>
              <h2>
                Example heading <span className="badge bg-secondary">New</span>
              </h2>
              <h3>
                Example heading <span className="badge bg-secondary">New</span>
              </h3>
              <h4>
                Example heading <span className="badge bg-secondary">New</span>
              </h4>
              <h5>
                Example heading <span className="badge bg-secondary">New</span>
              </h5>
              <h6>
                Example heading <span className="badge bg-secondary">New</span>
              </h6>

              <span className="mt-4 d-block">
                Badges can be used as part of links or buttons to provide a
                counter.
              </span>
              <br />
              <button type="button" className="btn btn-primary">
                Notifications <span className="badge bg-secondary">4</span>
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Background colors</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use our background utility classes to quickly change the
                appearance of a badge. Please note that when using Bootstrap’s
                default <code>.bg-light</code>, you’ll likely need a text color
                utility like
                <code> .text-dark</code> for proper styling. This is because
                background utilities do not set anything but{" "}
                <code>background-color</code>.
              </tc.TutorialBlockText>
              <span className="mx-1 badge bg-primary">Primary</span>
              <span className="mx-1 badge bg-secondary">Secondary</span>
              <span className="mx-1 badge bg-success">Success</span>
              <span className="mx-1 badge bg-danger">Danger</span>
              <span className="mx-1 badge bg-warning text-dark">Warning</span>
              <span className="mx-1 badge bg-info text-dark">Info</span>
              <span className="mx-1 badge bg-light text-dark">Light</span>
              <span className="mx-1 badge bg-dark">Dark</span>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Pill badges</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use the <code>.rounded-pill</code> utility class to make badges
                more rounded with a larger <code>border-radius</code>.
              </tc.TutorialBlockText>
              <span className="mx-1 badge rounded-pill bg-primary">Primary</span>
              <span className="mx-1 badge rounded-pill bg-secondary">Secondary</span>
              <span className="mx-1 badge rounded-pill bg-success">Success</span>
              <span className="mx-1 badge rounded-pill bg-danger">Danger</span>
              <span className="mx-1 badge rounded-pill bg-warning text-dark">
                Warning
              </span>
              <span className="mx-1 badge rounded-pill bg-info text-dark">Info</span>
              <span className="mx-1 badge rounded-pill bg-light text-dark">
                Light
              </span>
              <span className="mx-1 badge rounded-pill bg-dark">Dark</span>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIBadgePage;
