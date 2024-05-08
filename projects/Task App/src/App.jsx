
import { useEffect, useState} from 'react'
import TasksList from './components/TasksList'
import Confetti from 'canvas-confetti'
import Send from './icons/send'

function App() {
  const [tasks,setTasks]= useState([
    {
      "id": 1,
      "task": "Wake up",
      "isComplete": false
    },
    {
      "id": 2,
      "task": "Brush teeth",
      "isComplete": true
    },
    {
      "id": 3,
      "task": "Take a shower",
      "isComplete": true
    },
    {
      "id": 4,
      "task": "Have breakfast",
      "isComplete": false
    },
    {
      "id": 5,
      "task": "Go to work",
      "isComplete": false
    },
    {
      "id": 6,
      "task": "Attend meetings",
      "isComplete": false
    },
    {
      "id": 7,
      "task": "Lunch break",
      "isComplete": false
    },
    {
      "id": 8,
      "task": "Finish work tasks",
      "isComplete": false
    },
    {
      "id": 9,
      "task": "Exercise",
      "isComplete": true
    },
    {
      "id": 10,
      "task": "Dinner",
      "isComplete": false
    }
  ])
  const [showCoffetti,setShowCoffetti] =useState(false);

  useEffect(()=>{
    if(showCoffetti) Confetti({
      particleCount: 100, // Número de partículas de confeti
      spread: 160, // Distribución del confeti
      origin: { y: 0.6 }, // Origen del confeti (0 es arriba, 1 es abajo)
    });
    return ()=> setShowCoffetti(false);
  },[showCoffetti]); 

  const updateTasks = (id)=>{
    const newtasks=[...tasks],
    indexTaskChange=newtasks.findIndex(task => task.id===id);
    newtasks[indexTaskChange].isComplete=!newtasks[indexTaskChange].isComplete;
    setTasks(newtasks);
    if(newtasks[indexTaskChange].isComplete) setShowCoffetti(true);
  }

  const handleAddTask= (event)=>{
    event.preventDefault();
    const newTasks=[...tasks];
    const newTask={
      id:Math.floor(Math.random() * 1000),
      task: event.target.elements.taskDescription.value,
      isComplete: false
    }
    newTasks.unshift(newTask);
    setTasks(newTasks);
    event.target.elements.taskDescription.value="";
  }
  const handleRemoveTask=(id)=>{
    const newTasks=[...tasks],
    indexTask=newTasks.findIndex(task=>task.id===id);
    newTasks.splice(indexTask,1);
    setTasks(newTasks);
  }
  return (
    <main>
      <h1>Task App</h1>
      <form onSubmit={handleAddTask} className="add-frm" >
        <input type="text" name="taskDescription" placeholder="Ingrese su tarea aquí" minLength={2} 
        maxLength={100} required autoComplete='off'/>
        <button type="submit" className="add-btn" ><Send width="25" height="25" /></button>
      </form>
      <TasksList tasks={tasks} updateTasks={updateTasks} handleRemoveTask={handleRemoveTask}/>
    </main>
    

  )
}

export default App
