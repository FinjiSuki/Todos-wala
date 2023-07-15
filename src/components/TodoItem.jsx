import React from 'react'

const TodoItem = ({ singleTodo,onDeletingItem }) => {
  return (
    <div className='text-md p-3 bg-[#FBEAEB] rounded-md shadow-xl my-5 mx-10 md:mx-16 text-blue-900 flex justify-between'>
      <div className="grid grid-flow-col items-center">
        <div className="mr-4">
        {singleTodo.sno}.</div>
        <div className="grid grid-flow-row space-y-1">
          <h4 className='font-bold'>{singleTodo.name}</h4>
          <p>{singleTodo.Description}</p>
        </div>
      </div>

      <button className="pr-3" onClick={()=>{onDeletingItem(singleTodo)}}>&#10060;</button>
    </div>
  )
}

export default TodoItem
