import { FormTask } from './components/FormTask';
import TaskDetails from './components/TaskDetails';
import {Routes,Route} from 'react-router-dom'
import TaskView from './components/TaskView';
import { useTasks } from './hooks/useTasks';


function App() {
  const {state}=useTasks();
  return (
    <>
      <TaskView taskList={state.taskList}/>
      <Routes>
        <Route path='/tasks/:id' element={<TaskDetails/>}/>
      </Routes>
    </>
  )
}

export default App