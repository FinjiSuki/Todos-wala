import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <>
      <div className="mb-20 min-h-[75vh]">
        <div className="text-3xl font-mono font-extrabold underline underline-offset-4 hover:underline-offset-8 hover:bg-blue-300 m-10 flex justify-center">
          Todos List
        </div>
        {props.todos.length === 0 ? <div className='m-10 bg-yellow-200 text-yellow-900 p-3 text-center text-xl font-semibold hover:underline'>NO ToDo Tasks to Display!!!</div> :

          props.todos.map((todo) => {
            return <TodoItem singleTodo={todo} key={todo.sno} onDeletingItem={props.onDelete} />
          })}
      </div>
    </>
  )
}
