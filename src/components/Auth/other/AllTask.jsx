import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)

  console.log(authData?.employees);

  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5 '>

      <div className='bg-red-400 mb-2 py-2 px-3 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-md '>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-md'> New Task</h3>
        <h5 className='w-1/5 text-lg font-md'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-md'>Completed</h5>
        <h5 className='w-1/5 text-lg font-md '>Failed</h5>

      </div>
   <div className=' '>
       {authData?.employees?.map((e, idx) => {
        return (
          <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-3 flex justify-between rounded'>
            <h2 className='text-lg font-md w-1/5 '>{e.firstName}</h2>
            <h3 className='text-lg font-md w-1/5 !text-blue-400'>{e.taskCounts.newTask}</h3>
              <h3 className='text-lg font-md w-1/5 !text-yellow-400'>{e.taskCounts.active}</h3>
            <h3 className=' text-lg font-md w-1/5 !text-white'>{e.taskCounts.completed}</h3>
            <h3 className='text-lg font-md w-1/5 !text-red-600'>{e.taskCounts.failed}</h3>
          </div>
        )
      })}
   </div>
    </div>
  )
}

export default AllTask