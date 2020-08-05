import React ,{useState} from 'react'
import PropTypes from 'prop-types';

function Create({addTask}) {
    const [value,setValue]= useState("")
    const handleSubmit = e => {
      e.preventDefault();
      addTask(value);
      setValue("");
    };
    const handleChange = e => {
    if (e.target.value.startsWith(' ')) {
        setValue("")
        alert("can't start with space")
      }
      else{setValue(e.target.value)}
    }
    return (
        <form className="form">
          <input value={value} className="task-input" placeholder="Add Todo..."   onChange={handleChange}  required/>
          <button type="submit" className="add-task-btn"  onClick= {handleSubmit} > Create </button>

        </form>
    )
}
Create.propTypes ={
  addTask: PropTypes.func
}

export default Create
