import React from 'react'

const Balance = ({amount}) => {
  return (
    <div>
        <h4 className='text-xl py-4 px-6'>Your account balance is <span className='font-bold'>Rs.{amount}</span></h4>
    </div>
  )
}

export default Balance