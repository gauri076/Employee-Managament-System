import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full p-5 w-[500px] bg-blue-400 rounded-xl '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle} </h2>
            <p className='text-sm '>
                {data.taskDescription}
            </p>
            <div className='mt-2 py-2 px-2 bg-green-500 w-30 '>
                <button className='w-full'>completed</button>
            </div>
        </div>
  )
}

export default CompleteTask