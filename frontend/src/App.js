
import { useEffect, useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import axios from 'axios';
import AddTasks from "./components/AddTask";
import gsap from "gsap";


  

  


const ApiUrl = 'http://localhost:5000/api/goals/'


function App() {


  // learn custom hooks
  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)


  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true)
      const res = await axios.get(ApiUrl)
      setTasks(res.data)
      setIsLoading(false)
    }
    getTasks()

    return () => {

    }
  }, []);

  const onClick = async () => {
    setShowAddTask(!showAddTask)
  }

  const toggleReminder = async (_id) => {
    setIsLoading(true)
    const res = await axios.put(ApiUrl + _id)
    const data = res.data
    const reminder = data.reminder
    const updTask = { ...data, reminder: !reminder }
    const update = await axios.put(ApiUrl + _id, updTask)
    setTasks(tasks.map((task) => task._id === _id ? { ...task, reminder: !reminder } : task))
    console.log(update)
    setIsLoading(false)
  }

  const AddTask = async (task) => {
    setIsLoading(true)
    const res = await axios.post(ApiUrl, task)
    setTasks([...tasks, res.data])
    setIsLoading(false)
  }

  const deleteTask = async (_id) => {
    setIsLoading(true)
    const res = await axios.delete(ApiUrl + _id)
    console.log(res.data)
    setTasks(tasks.filter((task) => task._id !== _id))
    setIsLoading(false)
  }

  // const [counter, setCounter] = useState(0)


  // const handleCounterClick = (type) => {
  //   if (type === 'incr') {
  //     return () => {
  //       setCounter(counter + 1)
  //     }
  //   }
  //   if (type === 'decr') {
  //     return () => {
  //       setCounter(counter - 1)
  //     }
  //   }
  // }


  const handleScale = (type) => {
    if(type === 'enter') {
      return ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.2 });}
    }
    if(type === 'leave') {
      return ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });}
    }
  }
  

  return (
    <div className='container' >
      <Header text={'hello'} onClick={onClick} scale={handleScale}/>
      {showAddTask && <AddTasks onAdd={AddTask} />}
      <Tasks onDelete={deleteTask} tasks={tasks} isLoading={isLoading} toggleReminder={toggleReminder} />

      {/* <div>
        <span>{counter}</span>
        <div>
          <button onClick={handleCounterClick('decr')}>-</button>
          <button onClick={handleCounterClick('incr')}>+</button>
        </div>
      </div> */}

    </div>
  );
}

export default App;

