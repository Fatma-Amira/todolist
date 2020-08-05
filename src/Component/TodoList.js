import React from 'react'
import Task from "./Task"
import PropTypes from 'prop-types';

function TodoList({todos,removeTask,findItem,editItem,editTask}) {
   
    return (
    
       
           
                 <ul className="list">
          {todos.map((task) => (
            <Task 
            key={task.index}
             text={task.text}
              index={task.index}
               removeTask={removeTask}
                editItem={editItem} 
                editTask={editTask} findItem={findItem} />
            ))}
</ul>
    )
}
TodoList.propTypes ={
     removeTask: PropTypes.func, editItem: PropTypes.func,  
     editTask: PropTypes.func, todos: PropTypes.array,findItem: PropTypes.func
  }
  
export default TodoList
