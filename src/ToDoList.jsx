import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handelInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  return (
    <div className="todolist">
      <h1>My To-Do List</h1>
      <div>
        <input
          type="text"
          onChange={handelInputChange}
          value={newTask}
          placeholder="Enter A Task..."
        />
        <button className="add-task" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button onClick={() => moveTaskUp(index)}>👆🏻</button>
            <button onClick={() => moveTaskDown(index)}>👇🏻</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
