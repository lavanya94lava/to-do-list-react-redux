import React, { Component } from "react";

import { addTask } from "../actions/actionCreator";

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
            class="form-control"
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
              this.props.dispatch(addTask(this.state.taskText));
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

export default CreateTaskForm;
