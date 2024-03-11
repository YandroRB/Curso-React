import { useForm } from "../hooks/useForm";

export function FormTask({initialTask}){
    const {formRef,handleEditForm,handleForm}=useForm({initialTask});
    return(
        <form ref={formRef} onSubmit={(event)=>initialTask?handleEditForm(event):handleForm(event)}>
            <div>
                <label htmlFor="taskTitle">Nombre de la tarea</label>
                <input id="taskTitle" name="title" type="text"  />
            </div>
            <div>
                <label htmlFor="taskDescription">Descripcion</label>
                <textarea id="taskDescrition" name="description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="taskStatus">Estado</label>
                <select id="taskStatus" name="status">
                    <option value="pendiente">Pendiente</option>
                    <option value="en progreso">En Progreso</option>
                    <option value="completo">Completo</option>
                </select>
            </div>
            <button>Agregar</button>
        </form>
    )
}