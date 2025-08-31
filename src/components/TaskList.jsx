import TaskItem from "./TaskItem";
function TaskList({tasks}){
    return(
        <div>
            <ul className="space-y-2">
                {tasks.map(task=>(
                    <TaskItem key={task.id} task={task}/>
                    ))}
            </ul>
        </div>
    )
}
export default TaskList;