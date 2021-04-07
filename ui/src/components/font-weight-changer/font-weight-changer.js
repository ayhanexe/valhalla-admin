import { Component } from "react";
import { connect } from "react-redux";
import { FontService } from "../../services";
import { HellaSelect } from "../hella-components";

const fontService = new FontService();

class FontWeightChanger extends Component {
  fontWeightData = fontService.weights.map((item, index) => {
    return {
      text: item,
      onClick: () => this.props.changeWeight(index),
    };
  });
  render() {
    return (
      <HellaSelect
        selectedText={this.props.fontWeight}
        dropdownData={this.fontWeightData}
      />
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    changeWeight: (index) => {
      localStorage.setItem(
        fontService.localStorageWeightName,
        fontService.weightFromIndex(index)
      );
      dispatch({
        type: "CHANGE_FONT_WEIGHT_REQUESTED",
        data: index,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FontWeightChanger);
