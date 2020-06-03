import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTask } from "../actions/actionCreator";
import { bindActionCreators } from "redux";

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: "",
    };
  }

  onChangeTaskText = (e) => {
    this.setState({
      taskText: e.target.value,
    });
  };

  render() {
    return (
      <div className="form-row-group">
        <div className="col-sm-10">
          <input
            onChange={this.onChangeTaskText}
            value={this.state.taskText}
            type="text"
            className ="form-control"
            id="task-input"
            placeholder="add task here"
          />
          <button
            type="button"
            onClick={() => this.setState({ taskText: "" })}
            style={{ marginTop: "25px", marginRight: "15px" }}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.addTask(this.state.taskText);
              this.setState({ taskText: "" });
            }}
            style={{ marginTop: "25px" }}
            className="btn btn-success"
          >
            ADD Task
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addTask
  }, dispatch)
}


export default connect(null,mapDispatchToProps)(CreateTaskForm);
