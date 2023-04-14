import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  function handleChange(event) {
    setTask(event.target.value);
  }

  function addTask() {
    const taskObj = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: task,
      done: false,
      editing: false,
    };
    const newTaskList = [...taskList, taskObj];
    setTaskList(newTaskList);
  }
  function deleteTask(taskId) {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== taskId;
      })
    );
  }
  function completedTask(taskId) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          if (task.done === false) {
            return { ...task, done: true };
          }
          return { ...task, done: false };
        }
        return task;
      })
    );
  }

  return (
    <div className="App">
      <AddTask addTask={addTask} handleChange={handleChange} />
      <TaskList
        taskList={taskList}
        deleteTask={deleteTask}
        setTaskList={setTaskList}
        completedTask={completedTask}
      />
    </div>
  );
}

export default App;
