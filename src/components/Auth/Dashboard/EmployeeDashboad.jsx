import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboad = ({data}) => {
  return (
    <div className='p-15 bg-[#1C1C1C] h-screen'>
        <Header  data={data}/>
        <TaskListNumber data = {data}/>
        <TaskList data= {data}/>
        <div></div>
    </div>
  )
}

export default EmployeeDashboad