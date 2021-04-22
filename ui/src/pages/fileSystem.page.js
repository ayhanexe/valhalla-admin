import React, { Component } from "react";

import { FileManagerApp } from "../components";

class fileSystemPage extends Component {
  render() {
    return (
      <div className="container-fluid px-0 py-3">
        <FileManagerApp
          style={{
            height: "100vh",
          }}
        />
      </div>
    );
  }
}

export default fileSystemPage;
