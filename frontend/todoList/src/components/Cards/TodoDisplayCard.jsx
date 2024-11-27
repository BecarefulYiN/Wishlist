import React from 'react'
import TodoCard from './TodoCard.jsx'

const TodoDisplayCard = () => {
  return (
    <div 
      className='
        w-1/2
        flex
        flex-col
        gap-10
        bg-slate-100
        h-auto
        rounded-3xl
        p-12
      '
    >
      <p
        className='
          w-full
          ml-9
          pl-4
          text-xl
          font-bold
        '
      >
        Todo List
      </p>
      <TodoCard/>
    </div>
  )
}

export default TodoDisplayCard