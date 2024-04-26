import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { IconBxsBookOpen, IconCalendarDates, IconCircleFill, IconDocumentDelete, IconListStatus } from "../utils/Icons";
import { useTasks } from "../hooks/useTasks";


export default function TableTasks({taskList}){
  const {editTask,delTask}=useTasks();

  const handleChangeSelect=(event,item)=>{
    const newTask={...item,status:event.target.value};
    editTask(newTask);
  }
  const handleDelete=(task)=>{
    delTask(task);
  }
  
    return(
      <>
      <table className="border-collapse border-t border-b bg-white m-auto">
        <thead >
          <tr>
            <th className="text-left border-t border-b bg-indigo-500/50 pl-3 border-gray-700" >Nombre</th>
            <th className="text-left border-t border-b bg-indigo-500/50 pl-3 border-gray-700"><div className="flex items-center "><IconCalendarDates className=" h-5 w-5"/> <span>Fecha De Creación</span></div></th>
            <th className="text-left border-t border-b bg-indigo-500/50 pl-3 border-gray-700"><div className="flex items-center "><IconListStatus className=" h-5 w-5"/> <span>Estado</span></div></th>
            <th className="border-t border-b bg-indigo-500/50 pl-3 border-gray-700"></th>
          </tr>
        </thead>
        <tbody >
          {
            taskList.map(task =>{
              const {id,title,time,status}=task;
              return (
                <tr  key={id} className=" sm:h-9" >
                  <td className=" border-t border-b border-r-2 border-gray-500 sm:pl-3 sm:pr-9 task-title">{title} <Link className="show-Task bg-indigo-300 px-2 py-[0.05rem] rounded-md" to={`/tasks/${id}`}><IconBxsBookOpen className=" mr-1"/> Abrir</Link></td>
                  <td className=" border-t border-b border-r-2 border-gray-500 sm:pl-3 sm:pr-9 capitalize"><time dateTime={time}>{formatDate(time)}</time></td>
                  <td className=" border-t border-b border-r-2 border-gray-500 sm:pl-3 sm:pr-9 ">
                    <select className="focus:outline-none focus:border-none select-status" 
                    onChange={(event)=>handleChangeSelect(event,task)} 
                    name="status" defaultValue={status}>
                      <option className=" bg-white" value="pendiente">🔴 Pendiente</option>
                      <option className=" bg-white" value="en progreso">🟠 En Progreso</option>
                      <option className=" bg-white" value="completo">🟢 Completo</option>
                    </select>
                  </td>
                  <td className="border-t border-b  border-gray-500"> <span onClick={()=>handleDelete(task)} className=" cursor-pointer"><IconDocumentDelete className=" h-7 w-7"/></span></td>
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
            display:inline-flex;
            align-items: center;
          }
          `
        }
      </style>
      </>
    )
  }