
import { useEffect, useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import axios from 'axios';
import AddTasks from "./components/AddTask";

const ApiUrl = 'http://localhost:5000/api/goals/'


function App() {


  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTasks] = useState([])
 

  useEffect(() => {

    const getTasks = async () => {
    setIsLoading(true)
    const res = await axios.get(ApiUrl)
    setTasks(res.data)
    setIsLoading(false)  
    } 
    getTasks()
  }, []);

  const onClick = async () => {
    setIsLoading(true)
    const res = await axios.get(ApiUrl)
    
    setTasks(res.data)
    setIsLoading(false)
  }

  const toggleReminder = async (_id) => {
    setIsLoading(true)
    const res = await axios.put(ApiUrl + _id)
    const data = res.data
    const reminder = data.reminder
    const updTask = {...data, reminder: !reminder}
    const update = await axios.put(ApiUrl + _id, updTask)
    setTasks(tasks.map((task) => task._id === _id ? {...task, reminder: !reminder} : task))
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
  return (
    <div className='container'>
      
      <Header text={'hello'} onClick={onClick}/>
      <AddTasks onAdd={AddTask}/>
      <Tasks onDelete={deleteTask} tasks={tasks} isLoading={isLoading} toggleReminder={toggleReminder}/>
      
    </div>
  );
}

export default App;
