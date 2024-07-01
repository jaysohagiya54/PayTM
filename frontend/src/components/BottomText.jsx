import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = ({label,buttonText,to}) => {
  return (
    <div>
       <Link className='text-sm pb-4 pt-0 font-display' to={to}> {label} <span className='underline'>{buttonText}</span></Link>
       
    </div>
  )
}

export default BottomText