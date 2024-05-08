import { useEffect, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { FilterObject, formatDate } from "../utils/utils";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IconArrowBack, IconBxsEdit, IconDocumentDelete } from "../utils/Icons";

const colorStatus={
  "completo":"bg-lime-300/[.3] border-lime-300",
  "pendiente":"bg-red-300/[.3] border-red-300",
  "en progreso":"bg-orange-300/[.3] border-orange-300"
}

function TaskDetails() {
  const { id } = useParams();
  const { state,delTask } = useTasks();
  const navigate=useNavigate();
  const [data,setData]=useState();
  const location=useLocation();

  useEffect(() => {
    const findObject=FilterObject(state.taskList,id,"id");
    if(findObject.length>0) setData(findObject[0]);
    else navigate('/not found');
  }, [id,state]);
  
  const handleBackButton=()=>{
    navigate(-1);
  }
  const handleDelButton=()=>{
    delTask(data);
    navigate("/tasks/board")
  }
  return (
    <>
      {data && (
          <>
          <div className="flex px-2 text-3xl  max-w-[425px] m-auto text-black/60  gap-2">
            <button  className=" hover:text-indigo-500"><Link to={"/tasks/edit"} state={{previousLocation: location,task:data}} ><IconBxsEdit/></Link></button>
            <button onClick={handleDelButton} className=" hover:text-indigo-500"><IconDocumentDelete/></button>
            <button onClick={handleBackButton} className="ml-auto hover:text-indigo-500"><IconArrowBack/></button>
          </div>
          <article className={`flex flex-col ${colorStatus[data.status]} rounded-lg border-t-8 p-4 mt-0 mb-5 pb-8 max-w-[425px] m-auto space-y-4`}>

            <h2 className=" text-2xl font-bold">{data.title}</h2>
            <div className="grid grid-cols-2   text-base "><span className=" font-semibold text-black/75" >Fecha de creación</span> <time  className=" font-medium capitalize" dateTime={data.time}>{formatDate(data.time)}</time></div> 
            <div className="grid grid-cols-2   text-base "><span className=" font-semibold text-black/75" >Estado</span> <span className=" font-medium  capitalize" >{data.status}</span></div>
            <p className=" bg-white rounded-lg p-4">{data.description}</p>
          </article>
          </>
        ) }
    </>
  );
}

export default TaskDetails;
