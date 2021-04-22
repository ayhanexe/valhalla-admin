import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UICollapsePage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Collapse</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Example</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Click the buttons below to show and hide another element via
                class changes:
                <ul>
                  <li>
                    <code>.collapse</code> hides content
                  </li>
                  <li>
                    <code>.collapsing</code> is applied during transitions
                  </li>
                  <li>
                    <code>.collapse.show</code> shows content
                  </li>
                </ul>
                Generally, we recommend using a button with the{" "}
                <code>data-bs-target</code>
                attribute. While not recommended from a semantic point of view,
                you can also use a link with the href attribute (and a
                <code>role="button"</code>). In both cases, the{" "}
                <code>data-bs-toggle="collapse"</code> is required.
              </tc.TutorialBlockText>
              <p>
                <a
                  className="btn btn-primary m-1"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Link with href
                </a>
                <button
                  className="btn btn-primary m-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Button with data-bs-target
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body bg-dark">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Multiple targets</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                A <code>{`<button>`}</code> or <code>{`<a>`}</code> can show and
                hide multiple elements by referencing them with a selector in
                its <code>href</code> or <code>data-bs-target</code> attribute.
                Multiple
                <code>{`<button>`}</code> or <code>{`<a>`}</code> can show and
                hide an element if they each reference it with their{" "}
                <code>href</code> or
                <code>data-bs-target</code> attribute
              </tc.TutorialBlockText>
              <p>
                <a
                  className="btn btn-primary m-1"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Toggle first element
                </a>
                <button
                  className="btn btn-primary m-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                  Toggle second element
                </button>
                <button
                  className="btn btn-primary m-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target=".multi-collapse"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1 multiCollapseExample2"
                >
                  Toggle both elements
                </button>
              </p>
              <div className="row">
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample1"
                  >
                    <div className="card bg-dark card-body">
                      Some placeholder content for the first collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div className="card bg-dark card-body">
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </div>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UICollapsePage;
