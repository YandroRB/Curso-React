import { formatDate } from "../utils/utils";

export default function TaskView({taskList}){
    return(
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
              const fecha = new Date(time);
              return (
                <tr key={id}>
                  <td className="border py-1 px-9">{title}</td>
                  <td className="border py-1 px-9 capitalize">{formatDate(fecha)}</td>
                  <td className="border py-1 px-9 capitalize">{status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }