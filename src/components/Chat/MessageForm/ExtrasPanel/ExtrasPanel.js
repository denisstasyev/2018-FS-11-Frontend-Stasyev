import React from "react";
import { connect } from "react-redux";
import "./ExtrasPanel.css";

import FileButton from "./FileButton/FileButton";
import LocationButton from "./LocationButton/LocationButton";

import reactionTypeList from "../../ReactionTypes";
import ReactionButton from "./ReactionButton/ReactionButton";

class ExtrasPanel extends React.Component {
  render() {
    if (this.props.isExtrasPanelVisible)
      return (
        <div className="extras-panel">
          <div className="extras-panel__actions">
            <FileButton />
            <LocationButton />
          </div>
          <div className="extras-panel__reactions">
            {reactionTypeList.map(reaction => {
              return (
                <ReactionButton name={reaction.name} text={reaction.text} />
              );
            })}
          </div>
        </div>
      );
    else return null;
  }
}

const mapStateToProps = state => {
  return {
    isExtrasPanelVisible: state.messageFormReducer.isExtrasPanelVisible
  };
};

export default connect(
  mapStateToProps,
  null
)(ExtrasPanel);
