import React, { useContext } from 'react'
import { authContext } from '../context/Authcontext'

const AllTask = () => {
    const [userData, setuserData] = useContext(authContext)
  return (
    <div className='bg-[#1c1c1c] p-5  mt-5 '>
        <div className='bg-red-400 text-m mb-2 py-2 px-4 flex justify-around items-center rounded-xl'>
            <h2 className=' w-1/5'>Name</h2>
            <h2 className=' w-1/5'>New Task</h2>
            <h2 className=' w-1/5'>Active Task</h2>
            <h2 className=' w-1/5'>Completed Task</h2>
            <h2 className=' w-1/5'>Failed Task</h2>
        </div>
        <div>
            {userData.employees.map((e, idx)=>{
            return <div key={idx} className='text-m border-2 border-green-400 mb-2 py-2 px-4 flex justify-around items-center rounded-xl'>
            <h2 className=' w-1/5'>{e.name}</h2>
            <h2 className=' w-1/5'>{e.task_summary.new_task}</h2>
            <h2 className=' w-1/5'>{e.task_summary.active}</h2>
            <h2 className=' w-1/5'>{e.task_summary.completed}</h2>
            <h2 className=' w-1/5'>{e.task_summary.failed}</h2>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask