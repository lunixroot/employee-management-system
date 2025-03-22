import React from 'react'
import Header from '../../other/Header'
import Tasklistnumber from '../../other/Tasklistnumber'
import TaskList from '../taskList/TaskList'

const Employeedashbord = (p) => {
  return (
    <div className='p-10 bg-[#1c1c1c] text-white min-h-screen'>
        <Header changeUser={p.changeUser} data={p.data} />
        <Tasklistnumber data={p.data} />
        <TaskList data={p.data} />
    </div>
  )
}

export default Employeedashbord