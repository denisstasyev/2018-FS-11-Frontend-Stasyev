import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import * as actionTypes from "store/actionTypes/actionTypes";

class ExtrasButton extends React.Component {
  render() {
    return (
      <button
        className={styles["extras-button"]}
        onClick={this.props.handleOnClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnClick: () => dispatch({ type: actionTypes.TOGGLE_EXTRAS })
});

export default connect(
  null,
  mapDispatchToProps
)(ExtrasButton);
