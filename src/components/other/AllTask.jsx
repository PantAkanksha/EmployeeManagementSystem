import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const authData= useContext(AuthContext)
  return (
    <div classNAme='bg-[#1C1C1C] p-5 rounded mt-5 '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
            <h3 className='text-lg font-medium w-1/5'>Completed</h3>
            <h3 className='text-lg font-medium w-1/5'>Failed</h3>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        </div>
        <div className=' overflow-auto'>
        {authData.employees.map(function(elem, idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-white-600'>{elem.taskCounts.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h3>
        </div>
        })}
        </div>
        
    </div>
  )
}

export default AllTask