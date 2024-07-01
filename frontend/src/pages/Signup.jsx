import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomText from '../components/BottomText'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",
                {
                    username: userName,
                    firstName: firstName,
                    lastName: lastName,
                    password: password
                })
            console.log('response: ', response);
            if (response.status) {
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
            }
        } catch (error) {
            console.log('error: ', error);

        }
    }



    return (
        <div className='bg-slate-100 fixed w-full h-full flex justify-center items-center'>
            <div className='shadow-xl flex justify-center items-center flex-col content-center bg-white rounded-md px-4 py-4'>
                <Heading label={"Signup"} />
                <SubHeading label={"Fill the form to create account"} />
                <InputBox placeholder={"John"} label={"First Name"} type={"text"} onChange={(e) => setFirstName(e.target.value)} />
                <InputBox placeholder={"Doe"} label={"Last Name"} type={"text"} onChange={(e) => setLastName(e.target.value)} />
                <InputBox placeholder={"john@example.com"} label={"Username"} type={"email"} onChange={(e) => setUserName(e.target.value)} />
                <InputBox placeholder={"123456"} label={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)} />
                <Button label={"Sign Up"} onClick={() => handleSubmit()} />

                <BottomText label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    )
}

export default Signup