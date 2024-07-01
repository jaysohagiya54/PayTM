import React from 'react'

const InputBox = ({placeholder  ,type,label,onChange}) => {
  return (
    <div className='py-1 px-6 flex flex-col'>
        <label className='p-1 text-md font-sans'>{label}</label>
        <input onChange={onChange} className='rounded-md text-left pl-2 w-64 placeholder:text-sm bg-slate-50 border placeholder-slate-400 border-slate-400 h-8 ring-0 hover:ring-0' placeholder={placeholder} name={name}  type={type}/>
    </div>
  )
}

export default InputBox