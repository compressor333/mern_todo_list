import Task from "./Task"
import Spinner from './Spinner';




const Tasks = ({tasks, isLoading, toggleReminder, onDelete}) => {

    return ( isLoading ? (<Spinner />) :(
        <div>
            {tasks.map((task) => (<Task onDelete={onDelete} toggleReminder={toggleReminder} key={task._id} task={task}/>))}
        </div>)
    )
}

export default Tasks