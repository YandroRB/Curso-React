import { useForm } from "../hooks/useForm";

export function Formulario ({task:initialTask,handleSubmit}){
    const {formRef} = useForm({initialTask});
    const handleForm =(event)=>{
        event.preventDefault();
        handleSubmit(formRef);
    }
    return (
    <form ref={formRef} className="task-entrie" onSubmit={handleForm}>
      <label htmlFor="task">Tarea</label>
      <input
        name="task"
        id="task"
        type="text"
        placeholder="go to grocery, wash the dishes, finish report, prepare presentation...etc"
      />
      <label htmlFor="status">Estado</label>
      <select 
              id="status" 
              name="status">
        <option value="pending">🔴Pending</option>
        <option value="in progress">🟠In progress</option>
        <option value="complete">🟢Complete</option>
      </select>
      <button type="submit">➕</button>
    </form>
    )
  }  