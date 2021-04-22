import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIProgressPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Progress</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockText>
                Progress components are built with two HTML elements, some CSS
                to set the width, and a few attributes. We don’t use the HTML5{" "}
                <code>{`<progress>`}</code> element, ensuring you can stack
                progress bars, animate them, and place text labels over them.
                <br />
                <br />
                <ul>
                  <li>
                    We use the <code>.progress</code> as a wrapper to indicate
                    the max value of the progress bar.
                  </li>
                  <li>
                    We use the inner <code>.progress-bar</code> to indicate the
                    progress so far.
                  </li>
                  <li>
                    The <code>.progress-bar</code> requires an inline style,
                    utility class, or custom CSS to set their width.
                  </li>
                  <li>
                    The <code>.progress-bar</code> also requires some role and
                    aria attributes to make it accessible.
                  </li>
                </ul>
                Put that all together, and you have the following examples.
              </tc.TutorialBlockText>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <tc.TutorialBlockTitle className="mt-4">
                Labels
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add labels to your progress bars by placing text within the{" "}
                <code>.progress-bar</code>.
              </tc.TutorialBlockText>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div>
              </div>
              <tc.TutorialBlockTitle className="mt-4">
                Height
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                We only set a <code>height</code> value on the{" "}
                <code>.progress</code>, so if you change that value the inner{" "}
                <code>.progress-bar</code> will automatically resize
                accordingly.
              </tc.TutorialBlockText>
              <div className="progress my-2" style={{ height: "1px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <tc.TutorialBlockTitle className="mt-4">
                Backgrounds
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use background utility classes to change the appearance of
                individual progress bars.
              </tc.TutorialBlockText>
              <div className="progress my-2">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <tc.TutorialBlockTitle className="mt-4">
                Multiple bars
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Include multiple progress bars in a progress component if you
                need.
              </tc.TutorialBlockText>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "15%" }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <tc.TutorialBlockTitle className="mt-4">
                Striped
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code>.progress-bar-striped</code> to any{" "}
                <code>.progress-bar</code> to apply a stripe via CSS gradient
                over the progress bar’s background color.
              </tc.TutorialBlockText>
              <div className="progress my-2">
                <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress my-2">
                <div
                  className="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Animated stripes</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                The striped gradient can also be animated. Add
                .progress-bar-animated to .progress-bar to animate the stripes
                right to left via CSS3 animations.
              </tc.TutorialBlockText>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIProgressPage;
