import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/Authcontext'

const CreateTask = () => {
const [userData, setuserData] = useContext(authContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [asignTo, setasignTo] = useState('')
  const [category, setcategory] = useState('')
  const [task, settask] = useState({})

  const submeitHandler = (e)=>{
    e.preventDefault()

    const newTask = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      newTask: true,
      active: false,
      completed: false,
      failed: false,
    };

    // settask({taskTitle, taskDate, taskDescription, category, newTask:true, active:false, completed:false, failed:false})

    const updateEmployees = userData.employees.map((e)=>{
      if(e.name === asignTo){
        return{
          ...e,
          tasks: [...e.tasks, newTask], // Add new task
          task_summary: {...e.task_summary, new_task: e.task_summary.new_task + 1, active: e.task_summary.active + 1},
        }
      }
      return e;
    });

    setuserData((prev) => ({
      ...prev,
      employees: updateEmployees,
    }));

    // data.forEach(e=> {
    //   if(asignTo == e.name){
    //     e.tasks.push(task)
    //     console.log(e)
    //     e.task_summary.new_task = e.task_summary.new_task+1
    //   }
    // });

    localStorage.setItem('employees', JSON.stringify(updateEmployees))

    setasignTo('')
    setcategory('')
    settaskDate('')
    settaskDescription('')
    settaskTitle('')
  }


  return (
    <div>
        <div>
        <form className="flex mt-10 p-5">
          <div className="bg-gray-700 w-1/2 flex flex-col p-10 gap-5 rounded-l-xl">
            <div>
              <h3>Task Title</h3>
              <input value={taskTitle}
               onChange={(e)=>{
                settaskTitle(e.target.value)
              }}
               className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2 border-gray-400 text-xl" type="text" placeholder="Make a ui design" name="" id="" />
            </div>
            <div>
              <h3>Date</h3>
              <input  value={taskDate}
               onChange={(e)=>{
                settaskDate(e.target.value)
              }} className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl" type="date" name="" id="" />
            </div>
            <div>
              <h3>Asign to</h3>
              <input  value={asignTo}
               onChange={(e)=>{
                setasignTo(e.target.value)
              }} className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3>Category</h3>
              <input  value={category}
               onChange={(e)=>{
                setcategory(e.target.value)
              }} className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl" type="text" placeholder="design, dev, etc" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start bg-gray-700 w-1/2 p-5 placeholder:p-2  rounded-r-xl">
            <h3>Description</h3>
            <textarea  value={taskDescription}
               onChange={(e)=>{
                settaskDescription(e.target.value)
              }} className="mt-1 bg-transparent outline-none w-3/4 py-1 rounded-xl border-2 placeholder:p-2  border-gray-400 text-xl"  name="" cols={30} rows={10} id=""></textarea>
            <button onClick={(e)=>{
              submeitHandler(e)
            }} className="mt-3 w-3/4 bg-green-300 p-4 rounded-xl">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask