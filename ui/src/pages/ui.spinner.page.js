import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UISpinnersPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Spinners</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Border spinner</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use the border spinners for a lightweight loading indicator.
              </tc.TutorialBlockText>
              <div className="spinner-border m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Colors</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                The border spinner uses <code>currentColor</code> for its{" "}
                <code>border-color</code>, meaning you can customize the color
                with text color utilities. You can use any of our text color
                utilities on the standard spinner.
              </tc.TutorialBlockText>
              <div className="spinner-border text-primary m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-secondary m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-success m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-danger m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-warning m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-info m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-light m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-border text-dark m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Growing Spinner</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                If you don’t fancy a border spinner, switch to the grow spinner.
                While it doesn’t technically spin, it does repeatedly grow!
              </tc.TutorialBlockText>
              <div className="spinner-grow text-primary m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-success m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-info m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-light m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-dark m-2  " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Size</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code>.spinner-border-sm</code> and{" "}
                <code>.spinner-grow-sm</code> to make a smaller spinner that can
                quickly be used within other components.
              </tc.TutorialBlockText>
              <div
                className="spinner-border spinner-border-sm m-2"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow spinner-grow-sm m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Loading Buttons</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use spinners within buttons to indicate an action is currently
                processing or taking place. You may also swap the text out of
                the spinner element and utilize button text as needed.
              </tc.TutorialBlockText>
              <button className="btn btn-primary btn-sm m-2" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Loading...</span>
              </button>
              <button className="btn btn-primary btn-sm m-2" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp;Loading...
              </button>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UISpinnersPage;
