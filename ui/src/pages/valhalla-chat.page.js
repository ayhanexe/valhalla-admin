import React, { Component } from "react";
import { Chat } from "../components";

class ValhallaChatPage extends Component {
  render() {
    return (
      <div className="container h-100 px-0 py-3">
        <Chat className="full-screen" />
      </div>
    );
  }
}

export default ValhallaChatPage;
