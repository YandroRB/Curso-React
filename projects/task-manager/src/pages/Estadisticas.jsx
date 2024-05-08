import { Link } from "react-router-dom";
import BarChart from "../components/BarChart";
import { useTasks } from "../hooks/useTasks";
import { FilterObject } from "../utils/utils";

function Estadisticas() {
  const { state } = useTasks();
  const datos = {
    labels: ["Pendientes", "En Progreso", "Completas"],
    titles:["Pendientes", "En Progreso", "Completas","Todas"],
    links:["/tasks/pendiente/board","/tasks/en progreso/board","/tasks/completo/board","/tasks"],
    data: [
      FilterObject(state.taskList, "pendiente", "status").length,
      FilterObject(state.taskList, "en progreso", "status").length,
      FilterObject(state.taskList, "completo", "status").length,
      state.taskList.length,
    ],
  };
  return (
    <>
    <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2  gap-4 ">
    {
        datos.titles.map((title,index)=>(
            <section className="border  border-gray-100 bg-white my-4 p-4 shadow-md rounded-md leading-7 lg:my-auto" key={index}>
                <h3 className=" uppercase font-medium text-gray-500 cursor-pointer hover:text-indigo-500 hover:text-opacity-50"><Link to={datos.links[index]}>{title}</Link> </h3>
                <small className=" font-semibold text-2xl">{datos.data[index]}</small>
            </section>
        ))
    }

    </div>

      <BarChart chartData={datos} />

    </>
  );
}

export default Estadisticas;
