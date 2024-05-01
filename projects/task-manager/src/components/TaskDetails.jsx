import { useEffect, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { FilterObject, formatDate } from "../utils/utils";
import { useNavigate, useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();
  const { state } = useTasks();
  const navigate=useNavigate();
  const [data,setData]=useState();

  useEffect(() => {
    const findObject=FilterObject(state.taskList,id,"id");
    if(findObject.length>0) setData(findObject[0]);
    else navigate('/not found');
  }, [id]);
  
  return (
    <>
      {data && (
          <article>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <time dateTime={data.time}>{formatDate(data.time)}</time>
            <p>{data.status}</p>
          </article>
        ) }
    </>
  );
}

export default TaskDetails;
