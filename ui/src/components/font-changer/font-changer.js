import { Component } from "react";
import { connect } from "react-redux";
import { FontService } from "../../services";
import { HellaSelect } from "../hella-components";

const fontService = new FontService();

class FontChanger extends Component {
  constructor(props) {
    super(props);
    this.fontsData = Object.values(fontService.fonts).map((item, index) => {
      return {
        text: item.name,
        onClick: () => this.props.changeFont(index),
      };
    });
  }
  render() {
    return (
      <HellaSelect
        selectedText={this.props.fontFamily}
        dropdownData={this.fontsData}
      />
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    changeFont: (index) => {
      localStorage.setItem(
        fontService.localStorageName,
        fontService.fonts[Object.keys(fontService.fonts)[index]].name
      );
      dispatch({ type: "CHANGE_FONT_REQUESTED", data: index });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FontChanger);
