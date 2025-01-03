// Step 4. Import React and useState
import React, { useState } from "react";
// Step 5. Import the App.css file
import "./App.css";
// Step 6. Create a functional component called App
export default function App() {
  /* when using useState, the current state is the first 'argument' and the function 
  to change the state is the second 'argument'. many 'instances can be created.*/
  const [tasks, setTasks] = useState([]); // the 'array' of shopping list items
  const [inputValue, setInputValue] = useState(""); // useState for input values
  const [completed, setCompleted] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      // trim() gets rid of whitespace
      setTasks([...tasks, inputValue]); // ... (spread) spreads out the values i guess then puts inputValue as the next one
      setCompleted([...completed, false]);
      setInputValue(""); // makes input value nothing after the new item is added
    }
  };

  const handleCompleteTask = (index) => {
    let newCompleted = [...completed];
    newCompleted[index] = true;
    console.log(newCompleted);
    setCompleted(newCompleted);
  };

  const handleDeleteTask = (index) => {
    const newTaskList = tasks.filter((task, i) => i !== index); // makes new array without the one item
    const newCompletedList = completed.filter((task, i) => i !== index);
    setTasks(newTaskList);
    setCompleted(newCompletedList);
  };

  const handleDeleteList = () => {
    setTasks([]);
    setCompleted([]);
  };

  return (
    <div className="list">
      <h1>Shopping List</h1>
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item"
        />
        <button onClick={handleAddTask}>Add</button>
        <button onClick={() => handleDeleteList()}>Purchase</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className={completed[index] ? " completed" : ""}>{task}</div>
            <div className="tasks-actions">
              <button
                className={completed[index] ? " completed" : ""}
                onClick={() => handleCompleteTask(index)}
              >
                Check
              </button>
              <button onClick={() => handleDeleteTask(index)}>Purchase</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// note to myself: npm run start opens it in browser
