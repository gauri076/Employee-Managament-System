import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboad =(props) => {
  return (
    <div className='p-15 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser}  data={props.data}/>
        <TaskListNumber data = {props.data}/>
        <TaskList data= {props.data}/>
        
    </div>
  )
}

export default EmployeeDashboad