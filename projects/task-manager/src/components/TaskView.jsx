import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";


export default function TaskView({taskList}){
  
    return(
      <>
      <table className="table-auto border-collapse border ">
        <thead>
          <tr>
            <th className="border pb-3 bg-blue-400 border-slate-500" >Nombre</th>
            <th className="border pb-3 bg-blue-400 border-slate-500">Fecha De Creación</th>
            <th className="border pb-3 bg-blue-400 border-slate-500">Estado</th>
          </tr>
        </thead>
        <tbody>
          {
            taskList.map(task =>{
              const {id,title,time,status}=task;
              return (
                <tr key={id}>
                  <td className="border py-1 px-9 task-title">{title} <Link className="show-Task" to={`/tasks/${id}`}>Abrir</Link></td>
                  <td className="border py-1 px-9 capitalize"><time dateTime={time}>{formatDate(time)}</time></td>
                  <td className="border py-1 px-9 capitalize">{status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <style>
        {
          `
          .task-title{
            position:relative;
          }
          .show-Task{
            display:none;
            position:absolute;
            right:1rem;
          }
          .task-title:hover .show-Task{
            display:inline;
          }
          `
        }
      </style>
      </>
    )
  }