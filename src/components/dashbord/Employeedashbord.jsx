import React from 'react'
import Header from '../../other/Header'
import Tasklistnumber from '../../other/Tasklistnumber'
import TaskList from '../taskList/TaskList'

const Employeedashbord = ({data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c] text-white h-screen'>
        <Header data={data} />
        <Tasklistnumber data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default Employeedashbord