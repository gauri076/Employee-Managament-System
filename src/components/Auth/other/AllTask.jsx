import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)

  console.log(authData?.employees);

  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5 h-50 overflow-auto'>

      <div className='bg-purple-300 mb-2 py-2 px-3 flex justify-between rounded'>
        <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-600'>Task</h3>
        <h3 className='w-1/5 bg-red-600'>Status</h3>
        <h3 className='w-1/5 bg-red-600'>Completed</h3>

      </div>
      {authData?.employees?.map((employee, index) => {
        return (
          <div key={index} className='bg-purple-300 mb-2 py-2 px-3 flex justify-between rounded'>
            <h2 className='w-1/5 bg-red-600'>{employee.firstName || 'Sathak'}</h2>
            <h3 className='w-1/5 bg-red-600'>{employee.task || 'Make a UI Design'}</h3>
              <h3 className='w-1/5 bg-red-600'>{employee.status || 'Status'}</h3>
            <h3 className='w-1/5 bg-red-600'>{employee.status || 'Status'}</h3>
          </div>
        )
      })}

    </div>
  )
}

export default AllTask