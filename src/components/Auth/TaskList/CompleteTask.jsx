import React from 'react'

const CompleteTask = () => {
  return (
    <div className='shrink-0 h-full p-5 w-[500px] bg-blue-400 rounded-xl '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Hign</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video </h2>
            <p className='text-sm '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo, laboriosam commodi reiciendis porro voluptates.
            </p>
            <div className='mt-2 py-2 px-2 bg-green-500 w-30 '>
                <button className='w-full'>completed</button>
            </div>
        </div>
  )
}

export default CompleteTask