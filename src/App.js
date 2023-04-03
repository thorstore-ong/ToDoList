import './App.css';
import {useState} from 'react';
import { Task } from './Task';

function App() {
  //states and lists are common
  const [todoList, setTodoList] = useState([]);
  //this useState is used to represent the input value
  const [newTask, setNewTask] = useState("");
 
 

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1 ,
      taskName: newTask,
      completed: false
    };
   setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
   setTodoList(todoList.map((task) => task.id === id ? {...task, completed: true}  : task  ));
  };
   
  return (
    <div className="App">
     <div className="addTask">
    <input onChange={handleChange} />
    <button onClick={addTask}> Add Task</button>
     </div>
     <div className="list">
        {todoList.map((task) => {
    return (
      <Task 
      taskName={task.taskName} 
      id={task.id}
      completed={task.completed}
      deleteTask={deleteTask}
      completeTask={completeTask}/> 
    )})}
  
        </div>
  </div>
  
  );
}

export default App;
