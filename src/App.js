import React,{useState} from 'react';
import Create from './Component/Create';
import Header from "./Component/Header";
import TodoList from "./Component/TodoList"
import './App.css';
import Nbretask from './Component/Nbretask';

function App() {
  // Data
  const [todos, setTodos] = useState([
    {
      index:0,
      text: "Html",
    
    },
    {
      index:1,
      text: "CSS",
     
    },
    {
      index:2,
      text: "javascript",
    
    }
  ]);

  //add task
  const addTask = text => {
    if (text === "" || text === " ") {
      alert("can't add empty task")
    } 
    else 
    {
    const newTodos = [...todos, { text , index : todos.length }];
    setTodos(newTodos);
    }
  };
  //remove task
  const removeTask = index => {
    let newTodos=todos.filter(task => (task.index !== index ))
    setTodos(newTodos)
  };
//find task
  const [editTask, seteditTask] = useState(null)
  const findItem = index => {
 const item = todos.find(task => task.index === index)
    seteditTask(item)
  };
  //edit task
  const editItem = (text, index) => {
    const newTodos = todos.map(task => (task.index === index ? { text, index } : task))
    setTodos(newTodos)
    seteditTask(null)
  };
  
    return (
    <div className="App">
      <div className="container">
      <Header/>
      <div className="main">
     <Create addTask={addTask}/>
     <Nbretask  index={todos.length}/>
     <TodoList todos={todos} removeTask={removeTask} editItem={editItem}  editTask={editTask} findItem={findItem}/>
     </div>
     </div>
    </div>
  );
}

export default App;
