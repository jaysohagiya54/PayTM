import React from 'react'

const Button = ({label,onClick}) => {
  return (
    <div>
       <button onClick={onClick} className='bg-black bg-opacity-78 p-2 text-white font-serif text-xl rounded-md px-10 mt-4 mb-1'> {label}</button>
    </div>
  )
}

export default Button