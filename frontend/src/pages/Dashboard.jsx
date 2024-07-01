import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users';
import axios from 'axios';

const Dashboard = () => {
    const [amount,setAmount] = useState();
    const fetchBalance = async() => {
        const response =   await axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        })
            setAmount(response.data.balance)
    }
     useEffect(() => {
            fetchBalance();
     },[])

  return (
    <div>
        
        <Appbar/>
        <Balance amount={amount} />
        <Users/> 
    </div>
  )
}

export default Dashboard