import React from "react";

function TaskList(props) {
  return (
    <div className="LowerPart">
      {props.taskList.map((task, key) => {
        return (
          <div className="tasksList" key={key}>
            <h2
              style={{
                textDecorationLine: !task.done ? "none" : "line-through",
              }}
            >
              {task.taskName}
            </h2>
            <button
              className="btn2"
              onClick={() => {
                props.completedTask(task.id);
              }}
            >
              ✓
            </button>

            <button className="btn1" onClick={() => props.deleteTask(task.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
