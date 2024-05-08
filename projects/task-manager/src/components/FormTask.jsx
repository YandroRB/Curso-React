import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useLocation } from "react-router-dom";

export function FormTask(){
    const {state:locationState}=useLocation();
    const {formRef,handleEditForm,handleForm}=useForm({initialTask:locationState.task});
    return(
        <form className=" space-y-3" ref={formRef} onSubmit={(event)=>locationState.task?handleEditForm(event):handleForm(event)}>
            <div className="flex flex-col space-y-2">
                <label className="font-semibold" htmlFor="taskTitle">Nombre de la tarea</label>
                <input autoComplete="off" required className=" focus:outline-indigo-500 border border-indigo-300  rounded-md p-2" id="taskTitle" name="title" type="text"  />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="font-semibold" htmlFor="taskDescription">Descripcion</label>
                <textarea  required className=" resize-none focus:outline-indigo-500 border border-indigo-300  rounded-md p-2" id="taskDescrition" name="description" rows="6"></textarea>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="font-semibold" htmlFor="taskStatus">Estado</label>
                <select className=" focus:outline-indigo-500 border border-indigo-300  rounded-md p-2" id="taskStatus" name="status">
                    <option value="pendiente">🔴 Pendiente</option>
                    <option value="en progreso">🟠 En Progreso</option>
                    <option value="completo">🟢 Completo</option>
                </select>
            </div>
            <button className=" w-full border border-indigo-600 bg-indigo-300 hover:bg-indigo-500 py-2 rounded-md font-semibold">Agregar</button>
        </form>
    )
}