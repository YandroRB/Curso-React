export function getNewTaskList({taskList,newTask}){
    const newTaskList = [...taskList];
    newTaskList.unshift(newTask);
    return newTaskList;
}

export function getNewTask({formData,taskID}){
    const data = Object.fromEntries(new FormData(formData.current));
    const newTask = {
      id: taskID||Math.floor(Math.random() * 300) + 1,
      ...data,
    };
    return newTask;
}

export function getTaskListEdited({taskList,newTask,taskID}){
    const newTaskList = [...taskList];
    const findIndex= newTaskList.findIndex(task => task.id === taskID);
    newTaskList[findIndex]=newTask;
    return newTaskList;
}
export function deleteTask({taskList,taskID}){
    const newTaskList=[...taskList];
    const findIndex= newTaskList.findIndex(task => task.id === taskID);
    newTaskList.splice(findIndex,1);
    return newTaskList;
}