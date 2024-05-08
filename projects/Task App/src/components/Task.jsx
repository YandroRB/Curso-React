import PropTypes from 'prop-types'
import Trash from '../icons/trash';


function Task({children,id,isComplete,updateTasks,handleRemoveTask}) {
  const className=`task ${isComplete?'completed':''}`
  const handleChange=()=>{
    updateTasks(id);
  }
  const handleRemove=()=>{
    handleRemoveTask(id);
  }
  return (
    <li className={className} ><input type="checkbox" defaultChecked={isComplete} onChange={handleChange}/>
    <span>{children}</span> <button onClick={handleRemove}><Trash width = "20" height="20"/></button> </li>
  )
}

Task.propTypes = {
    id:PropTypes.number,
    task:PropTypes.string,
    isComplete:PropTypes.bool,
    updateTasks:PropTypes.func

}

export default Task
