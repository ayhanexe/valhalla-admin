import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIBreadcrumbsPage extends Component {
  render() {
    return (
      <div className="container pt-5">
        <tc.TutorialTitle>Bootstrap Breadcrumbs</tc.TutorialTitle>
        <div className="row">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Example</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use an ordered or unordered list with linked list items to
                create a minimally styled breadcrumb. Use our utilities to add
                additional styles as desired.
              </tc.TutorialBlockText>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    Home
                  </li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Dividers</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Dividers are automatically added in CSS through{" "}
                <code>::before</code> and content. They can be changed by
                modifying a local CSS custom property{" "}
                <code>--bs-breadcrumb-divider</code>, or through the
                <code>$breadcrumb-divider</code> Sass variable — and
                <code>$breadcrumb-divider-flipped</code> for its RTL
                counterpart, if needed. We default to our Sass variable, which
                is set as a fallback to the custom property. This way, you get a
                global divider that you can override without recompiling CSS at
                any time.
              </tc.TutorialBlockText>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIBreadcrumbsPage;
