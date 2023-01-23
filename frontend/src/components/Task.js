import { FaTimes } from "react-icons/fa"


const Task = ({task, toggleReminder, onDelete}) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => {toggleReminder(task._id)}}>
        <h3>{task.text} <FaTimes onClick={() => onDelete(task._id)} /></h3>
        <h2>{task.day}</h2>
    </div>
  )
}

export default Task