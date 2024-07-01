import React from 'react'

const Appbar = () => {
  return (
    <div className='flex items-center justify-between p-5 shadow-xl bg-blue-50'>
        <h3 className='text-3xl font-normal px-3 font-serif'>PayTM</h3>
        <div>
            <div className='flex items-center p-4 text-center'>
                <div className='bg-orange-400 rounded-full w-8 h-8 mx-3 flex items-center justify-center content-center' >
                        <h1 className=''>U</h1>
                </div>
                <h3 className='text-lg'>User</h3>
            </div>
        </div>
    </div>
  )
}

export default Appbar;