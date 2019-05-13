import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import { FileButton } from "./FileButton";
import { LocationButton } from "./LocationButton";
import { ReactionButton } from "./ReactionButton";

import reactionTypeList from "../reactionTypes";

class ExtrasPanel extends React.Component {
  render() {
    if (this.props.isExtrasPanelVisible)
      return (
        <div className={styles["extras-panel"]}>
          <div className={styles["extras-panel__actions"]}>
            <FileButton />
            <LocationButton />
          </div>
          <div className={styles["extras-panel__reactions"]}>
            {reactionTypeList.map((reaction, idx) => (
              <ReactionButton
                key={`${reaction.name}_${idx}`}
                name={reaction.name}
                text={reaction.text}
              />
            ))}
          </div>
        </div>
      );
    else return null;
  }
}

const mapStateToProps = state => ({
  isExtrasPanelVisible: state.messageFormReducer.isExtrasPanelVisible
});

export default connect(
  mapStateToProps,
  null
)(ExtrasPanel);
