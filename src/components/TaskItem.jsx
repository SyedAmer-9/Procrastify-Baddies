

export default function TaskItem({task,deleteTask}) {
  return (
    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
        <span>
            {task.text}
        </span>

        <button 
            className="px-2 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
            onClick={()=>deleteTask(task.id)}
        >Delete</button>
    </li>
  )
}

