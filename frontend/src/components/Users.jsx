import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    const fetchUsers = async () => {
        const response  = await axios.get(`http://localhost:3000/api/v1/bulk?filter=${filter}`,{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        });
       
        setUsers(response.data.users);
}

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchUsers();
        },400)

        return () => clearTimeout(timer);
    },[filter])
  return (
    <div>
         <div className="font-bold mt-6 text-xl mx-8">
            Users
        </div>
        <div className="my-2 mx-4">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
            {users.map((user,index) => (
                <div key={index} className='flex justify-between items-center py-2 px-10'>
                            <label className='text-xl font-semibold'>{user.firstName}</label>
                            <Button label={"Send Money"} onClick={() => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName)} }/>
                    </div>
            ))}
    </div>
  )
}

export default Users

