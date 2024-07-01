import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomText from '../components/BottomText'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [username,setusername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
  
     const handleSubmit = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
        })
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard")
     }

  return (
    <div className='bg-slate-100 fixed w-full h-full flex justify-center items-center'>
    <div className='shadow-xl flex justify-center items-center flex-col content-center bg-white rounded-md px-4 py-4'>
        <Heading label={"Signin"} />
        <SubHeading label={"Log in to see your dashboard"} />
        <InputBox placeholder={"john@example.com"} label={"Username"} type={"email"} onChange={(e) => setusername(e.target.value)}/>
        <InputBox placeholder={"123456"} label={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)} />
        <Button label={"Sign In"} onClick={() => handleSubmit()}/>

        <BottomText label={"New to this Site? "} buttonText={"Sign Up"} to={"/signup"} />
    </div>
</div>
  )
}

export default Signin