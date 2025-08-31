import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
function App() {
  
//this two states are for holding and memorizing the tasks

const [newTask,setNewTask] = useState("")
const [tasks,setTaskList] = useState([])

const handleSubmitTask = (e) =>{
  e.preventDefault() //prevents the page from refreshing on pressing submit

  if(newTask.trim() === "")return

  const newTaskObject = {
    id : Date.now(),
    text:newTask,
    completed:false,
  };
  setTaskList([...tasks,newTaskObject]);
  setNewTask('');

}

  return (
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-grey-200">
        Procrastify-Baddies
      </h1>
      
      <TaskForm 
      newTask={newTask}
      setNewTask={setNewTask}
      handleSubmitTask={handleSubmitTask}/>

      <TaskList
        tasks={tasks}
      />
    </main>
  )
}

export default App
