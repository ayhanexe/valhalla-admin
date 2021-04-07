import { Component } from "react";
import { connect } from "react-redux";

import { HellaCheckbox } from "../hella-components";

class FixedLeftSidebarToggler extends Component {
  render() {
    return (
      <HellaCheckbox
        event={this.props._toggleFixedLeftSidebar}
        checked={this.props.toggleFixedLeftSidebar}
      />
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    _toggleFixedLeftSidebar: (_data_) =>
      dispatch({
        type: "TOGGLE_FIXED_LEFT_SIDEBAR_REQUESTED",
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FixedLeftSidebarToggler);
