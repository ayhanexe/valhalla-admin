import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIRatiosPage extends Component {
  render() {
    return (
      <div className="container pb-5 text-light">
        <tc.TutorialTitle>Bootstrap Ratios</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>About</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use the ratio helper to manage the aspect ratios of external
                content like <code>{"<iframe>"}</code>s,{" "}
                <code>{"<embed>"}</code>s, <code>{"<video>"}</code>s, and{" "}
                <code>{"<object>"}</code>s. These helpers also can be used on
                any standard HTML child element (e.g., a <code>{"<div>"}</code>{" "}
                or <code>{"<img>"}</code>). Styles are applied from the parent
                <code> .ratio</code> class directly to the child.
                <br />
                <br />
                <tc.TutorialBlockTitle>Example</tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Wrap any embed, like an <code>{"<iframe>"}</code>, in a parent
                  element with <code>.ratio</code> and an aspect ratio class.
                  The immediate child element is automatically sized thanks to
                  our universal selector <code>{".ratio > *"}</code>.
                </tc.TutorialBlockText>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    title="YouTube video"
                    className="rounded"
                    allowfullscreen
                  ></iframe>
                </div>
              </tc.TutorialBlockText>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Aspect ratios</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Aspect ratios can be customized with modifier classes. By
                default the following ratio classes are provided:
              </tc.TutorialBlockText>
              <div
                className="ratio ratio-1x1 rounded bg-dark opacity-50 m-2 d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "10rem",
                }}
              >
                1x1
              </div>
              <div
                className="ratio ratio-4x3 rounded bg-dark opacity-50 m-2 d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "10rem",
                }}
              >
                4x3
              </div>
              <div
                className="ratio ratio-16x9 rounded bg-dark opacity-50 m-2 d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "10rem",
                }}
              >
                16x9
              </div>
              <div
                className="ratio ratio-21x9 rounded bg-dark opacity-50 m-2 d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "10rem",
                }}
              >
                21x9
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle></tc.TutorialBlockTitle>
              <tc.TutorialBlockText></tc.TutorialBlockText>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIRatiosPage;
