import { Link } from "react-router-dom"

function TasksList({tasks,status}) {
  return (
    <section>
        <h2 className="text-xl">{status}</h2>
        {tasks.map(task=>{
            return (
                <Link key={task.id} to={`/tasks/${task.id}`} ><p>{task.title}</p></Link>
            )
        })}
    </section>
  )
}

export default TasksList