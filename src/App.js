import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {   

  const [tasks, setTasks] = useState([])

  const addTask = (value) => {
    const boxValue = document.getElementById('box').value;
    setTasks([...tasks, boxValue])
  }

  const clearAllTasks = () => {
    const clearedTask = tasks.filter((task) => task === "")
    return setTasks(clearedTask);
  }

  const deleteTask = (e) => {
   //const newTasks = [...tasks];
   //newTasks.splice(e.currentTarget.value, 1);
   //setTasks(newTasks);

    const reducedArray = tasks.filter((task, index) => index !== parseInt(e.currentTarget.value));
    setTasks(reducedArray);
  }
  return (
    <div>
      <h1>TODO LIST</h1>
      <input id="box"/>
     <div>
      <button  style= {{ backgroundColor: "green" }} onClick={() => addTask()}> ADD TASK </button>
      <button  style= {{ backgroundColor: "red" }} onClick={() => clearAllTasks()}> CLEAR ALL TASK </button>
     </div>
      {tasks.map((task, index) => {
        return (
          <div key={task}>

            <ul>
              <li>{task}</li>
            </ul>

            <button value={index} style= {{ backgroundColor: "red" }} onClick={(e) => deleteTask(e)}>
                DELETE
            </button>

          </div>
        )
      })}
    </div>
  );
}

export default App;
