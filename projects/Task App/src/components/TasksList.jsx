import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

function TasksList({tasks,updateTasks,handleRemoveTask}) {
  return (
    <ul className='task-list'>
        {tasks.map(({id,task,isComplete})=>{
            return (
                <Task key={id} 
                      id={id} 
                      isComplete={isComplete} 
                      updateTasks={updateTasks}
                      handleRemoveTask={handleRemoveTask} >
                {task} </Task>
            )
        })}
    </ul>
  )
}
TasksList.propTypes = {
    tasks:PropTypes.array.isRequired,
    updateTasks:PropTypes.func.isRequired
}

export default TasksList
