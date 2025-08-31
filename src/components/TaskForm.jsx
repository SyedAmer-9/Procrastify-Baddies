function TaskForm({newTask,setNewTask,handleSubmitTask}){
    return(
    <form onSubmit={handleSubmitTask} className="mb-10">
        <div className="flex gap-3">
            <input
                className="flex-grow p-2.5 border-green-900 rounded-md bg-yellow-800 text-gray-200 text-sm"
                type='text'
                placeholder="Add your tasks here(as if you gonna complete it)"
                value = {newTask}
                onChange={(e)=>setNewTask(e.target.value)}
            ></input>

            <button 
                className=" bg-green-600 text-white px-3 py-2 rounded-md"
                type= 'submit'>
                Add Task
            </button>
        </div>
    </form>
    )
}
export default TaskForm;