import React from "react";

function AddTask(props) {
  return (
    <div className="upperPart">
      <h1>My To Do List</h1>
      <input type="text" className="inpField" onChange={props.handleChange} />

      <button className="btn" onClick={props.addTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
