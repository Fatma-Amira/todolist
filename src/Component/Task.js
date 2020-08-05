import React,{useState} from 'react'
import PropTypes from 'prop-types';
function Task({text,removeTask,index,editItem,addTask}) {
  
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(text)

  function handleChange(e) {
    if (e.target.value.startsWith(' ')) {
      setValue("")
      alert("can't start with space")

    }
    else{setValue(e.target.value)}
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!editItem) {
      addTask(value)
      setEditing(false);
    }
     else {
      if (value==="") {
        alert("can't add empty task")
      }else{
      editItem(value,index)
      setEditing(false);
    }
  }
  } 
  function handleReset(e) {
    e.preventDefault()
    setValue(text)
    setEditing(false);
    
  } 


  // template d'edition

 const editingTemplate = (
<form  > 
<input type="text" value={value} onChange={handleChange} className="task-input"/>
 <button className="edit-task-btn"   onClick={handleReset}><i className="fas fa-window-close edit-fas" ></i></button>
 <button className="edit-task-btn" onClick={handleSubmit}><i className="fas fa-save edit-fas"  ></i></button>  

 </form>
  );
  // template contenant la liste de todos

  const viewTemplate = (
   <form className="list-item">
    <span>{value} </span>
    <div>
    <i className="fas fa-trash-alt" onClick={(e) =>{
        e.preventDefault()
         removeTask(index)
         }}></i>
         <i className="fas fa-edit" onClick={() => setEditing(true)}></i>
    </div> 
    </form>
  );
  return (
    <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    )
}
Task.propTypes ={
  text: PropTypes.string, index: PropTypes.number, 
   removeTask: PropTypes.func, editItem: PropTypes.func,  addTask: PropTypes.func
}

export default Task
