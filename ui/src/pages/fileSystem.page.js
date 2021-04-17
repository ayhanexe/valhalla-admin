import React, { Component } from "react";

import { FileManagerApp } from "../components";

class fileSystemPage extends Component {
  render() {
    return (
      <div className="container-fluid h-100 px-0 py-3">
        <FileManagerApp />
      </div>
    );
  }
}

export default fileSystemPage;
