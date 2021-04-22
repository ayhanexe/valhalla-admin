import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIListPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Lists</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Basic example</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                The most basic list group is an unordered list with list items
                and the proper classes. Build upon it with the options that
                follow, or with your own CSS as needed.
              </tc.TutorialBlockText>
              <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Active items</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code>.active</code> to a <code>.list-group-item</code> to
                indicate the current active selection.
              </tc.TutorialBlockText>
              <ul className="list-group">
                <li className="list-group-item active" aria-current="true">
                  An active item
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Disabled items</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code> .disabled </code> to a <code>.list-group-item</code>{" "}
                to make it appear disabled. Note that some elements with{" "}
                <code>.disabled</code>
                will also require custom JavaScript to fully disable their click
                events (e.g., links).
              </tc.TutorialBlockText>
              <ul className="list-group">
                <li className="list-group-item disabled">
                  A disabled item
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Flush</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code>.list-group-flush</code> to remove some borders and
                rounded corners to render list group items edge-to-edge in a
                parent container (e.g., cards).
              </tc.TutorialBlockText>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockText>
                These work great with custom content as well.
              </tc.TutorialBlockText>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
              </ol>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Custom content</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add nearly any HTML within, even for linked list groups like the
                one below, with the help of flexbox utilities.
              </tc.TutorialBlockText>
              <div className="list-group">
                <a
                  href="/"
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Some placeholder content in a paragraph.
                  </p>
                  <small>And some small print.</small>
                </a>
                <a href="/" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Some placeholder content in a paragraph.
                  </p>
                  <small className="text-muted">
                    And some muted small print.
                  </small>
                </a>
                <a href="/" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Some placeholder content in a paragraph.
                  </p>
                  <small className="text-muted">
                    And some muted small print.
                  </small>
                </a>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIListPage;
