import { Component } from "react";
import { connect } from "react-redux";

import { ThemeService } from "../../services";
import { HellaSelect } from "../hella-components";

const themeService = new ThemeService();

class ThemeChanger extends Component {
  constructor(props) {
    super(props);
    this.themeData = themeService.themes.map((item, index) => {
      return {
        text: item.name,
        onClick: () => this.props.changeTheme(index),
      };
    });
  }
  render() {
    return (
      <HellaSelect
        selectedText={themeService.getCurrentTheme().name}
        dropdownData={this.themeData}
      />
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (index) => {
      localStorage.setItem(themeService.localStorageName, index);
      dispatch({
        type: "CHANGE_THEME_REQUESTED",
        data: index,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChanger);
