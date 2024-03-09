import { useEffect, useState } from 'react'
import {data }from '../data.json'

function formatDate(date) {
  const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
  const parts = new Intl.DateTimeFormat('es', options).formatToParts(date);

  let day, month, year, hour, minute, dayPeriod;

  for (const part of parts) {
      switch(part.type) {
          case 'day':
              day = part.value;
              break;
          case 'month':
              month = part.value;
              break;
          case 'year':
              year = part.value;
              break;
          case 'hour':
              hour = part.value;
              break;
          case 'minute':
              minute = part.value;
              break;
          case 'dayPeriod':
              dayPeriod = part.value;
              break;
      }
  }

  // Construye el formato deseado
  return `${month} ${day}, ${year} ${hour}:${minute} ${dayPeriod}`;
}
function TaskView({taskList}){
  return(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de creación</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          taskList.map(task =>{
            const {id,title,time,status}=task;
            const fecha = new Date(time);
            return (
              <tr key={id}>
                <td>{title}</td>
                <td>{formatDate(fecha)}</td>
                <td>{status}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
function App() {
  const [taskList,setTaskList]=useState(data);

  return (
    <TaskView taskList={taskList}/>
  )
}

export default App