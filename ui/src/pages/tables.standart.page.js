import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class TablesStandartPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Standart Bootstrap Tables</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Overview</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Due to the widespread use of <code>{"<table>"}</code> elements
                across third-party widgets like calendars and date pickers,
                Bootstrap’s tables are <b>opt-in</b>. Add the base class{" "}
                <code>.table</code> to any <code>{"<table>"}</code>, then extend
                with our optional modifier classes or custom styles. All table
                styles are not inherited in Bootstrap, meaning any nested tables
                can be styled independent from the parent.
                <br />
                <br />
                Using the most basic table markup, here’s how{" "}
                <code>.table</code>-based tables look in Bootstrap.
              </tc.TutorialBlockText>
              <table className="table bg-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Variants</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use contextual classes to color tables, table rows or individual
                cells.
              </tc.TutorialBlockText>
              <table className="table bg-light">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Heading</th>
                    <th>Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Default</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-primary">
                    <td>Primary</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-secondary">
                    <td>Secondary</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-success">
                    <td>Success</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-danger">
                    <td>Danger</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-warning">
                    <td>Warning</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-info">
                    <td>Info</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-light">
                    <td>Light</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-dark">
                    <td>Dark</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </table>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Accented tables</tc.TutorialBlockTitle>
              <tc.TutorialBlockTitle>Striped rows</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use <code>.table-striped</code> to add zebra-striping to any
                table row within the <code>{"<tbody>"}</code>.
              </tc.TutorialBlockText>

              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-striped table-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Hoverable rows</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code>.table-hover</code> to enable a hover state on table
                rows within a <code>{"<tbody>"}</code>.
              </tc.TutorialBlockText>
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Active tables</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Highlight a table row or cell by adding a{" "}
                <code>.table-active</code> class.
              </tc.TutorialBlockText>
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default TablesStandartPage;
