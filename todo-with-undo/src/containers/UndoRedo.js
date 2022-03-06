import React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { connect } from "react-redux";
class UndoRedo extends React.Component {
  render() {
    return (
      <p>
        <button onClick={this.props.onUndo} disabled={!this.props.canUndo}>
          Undo
        </button>
        <button onClick={this.props.onRedo} disabled={!this.props.canRedo}>
          Redo
        </button>
      </p>
    );
  }
}
const mapStateToProps = state => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  };
};
const mapDispatchToProps = {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
};
UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
export default UndoRedo;
