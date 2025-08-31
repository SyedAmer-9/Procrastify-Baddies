import { useState, useEffect, useMemo,useContext} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { ThemeContext } from "./context/ThemeContext";
import QuoteDisplay from "./components/QuoteDisplay";
function App() {
  const {theme,toggleTheme} = useContext(ThemeContext);
  
//this two states are for holding and memorizing the tasks

const [newTask,setNewTask] = useState("")
const [tasks,setTaskList] = useState(()=>{
  const savedTasks = localStorage.getItem('tasks');
  if(savedTasks){
    return JSON.parse(savedTasks);
  }else{
    return [];
  }
})
const [filter,setFilter] = useState('all');

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks])

const remainingTasksCount = useMemo(()=>{
  return tasks.filter(t=> !t.completed).length;
},[tasks]);

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

const deleteTask = (idToDelete) => {
  const updatedTasks = tasks.filter(t=> t.id !=idToDelete);
  setTaskList(updatedTasks)
};

const toggleComplete = (idToToggle)=>{
  const updatedTasks = tasks.map(t =>{
    if(t.id === idToToggle){
      return {...t,completed:!t.completed};
    }
    return t;
  });
  setTaskList(updatedTasks);
};

let filteredTasks = [];

if(filter ==='active'){
  filteredTasks = tasks.filter(t=> !t.completed);
}else if (filter === 'completed'){
  filteredTasks = tasks.filter(t => t.completed)
}else{
  filteredTasks = tasks
}

  return (
    <div className={theme}>
      <main className="min-h-screen bg-white dark:bg-gray-900 p-8 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Procrastify-Baddies
          </h1>
          <button 
            onClick={toggleTheme}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm"
          >
            Toggle Theme
          </button>
        </div>
        
        <TaskForm 
          newTask={newTask}
          setNewTask={setNewTask}
          handleSubmitTask={handleSubmitTask}
        />

        <h2 className="text-center text-gray-400 text-lg my-4">
          Tasks Remaining: {remainingTasksCount}
        </h2>

        <TaskFilter setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
        <QuoteDisplay/>
      </main>
    </div>
  )
}

export default App
