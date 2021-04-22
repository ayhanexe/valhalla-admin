import React, { Component } from "react";
import { CustomTable } from "../components";
import { TutorialComponents as tc } from "../components";
import axios from "axios";

class TablesPluginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: null,
    };
  }

  async getData() {
    return new Promise(async (resolve, reject) => {
      try {
        await axios
          .get("https://randomuser.me/api/?results=500")
          .then((response) => {
            this.setState({
              tableData: response.data.results,
            });
          })
          .catch((error) => {
            throw new Error(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Plugin Tables</tc.TutorialTitle>

        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle className="display-6 fw-bold">
                React Table
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                React Table is a collection of hooks for
                <b>building powerful tables and datagrid experiences</b>. These
                hooks are lightweight, composable, and ultra-extensible, but
                <b>do not render any markup or styles for you</b>. This
                effectively means that React Table is a "headless" UI library.
              </tc.TutorialBlockText>
              <br />
              <br />
              <tc.TutorialBlockTitle>
                A Table Utility, not a Table Component
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                By acting as an ultra-smart table <i>utility</i>, React Table
                opens up the possibility for your tables to integrate into any
                existing theme, UI library or existing table markup. This also
                means that if you don't have an existing table component or
                table styles, React Table will help you learn to build the table
                markup and styles required to display great tables.
              </tc.TutorialBlockText>
              {this.state.tableData ? (
                <CustomTable
                  data={this.state.tableData}
                  columns={[
                    {
                      Header: "name",
                      accessor: "name.first",
                    },
                    {
                      Header: "lastname",
                      accessor: "name.last",
                    },
                    {
                      Header: "Age",
                      accessor: "dob.age",
                    },
                    {
                      Header: "Country",
                      accessor: "location.country",
                    },
                  ]}
                />
              ) : (
                <span>Loading Table...</span>
              )}
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default TablesPluginPage;
