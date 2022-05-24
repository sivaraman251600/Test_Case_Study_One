import axios from 'axios'
import React, { useState } from 'react'

const LoginPageValidation = () => {
    const [userId, setUserId] = useState(0)
    const [password, setPassword] = useState("")
    const [confirmData, setConfirmData] = useState('')

    const validateUserDetails = () => {
        axios.get('http://localhost:3002/userLoginDetails/1')
        .then(res=>setConfirmData(res.data))
        .catch(err=>console.log(err.message))

        console.log('Validation Called')

        var user_Id = confirmData.user_Id;
        var passwordConfirm = confirmData.password;

        
        console.log(typeof(userId))
        console.log(typeof(user_Id))
        console.log(typeof(password))
        console.log(typeof(passwordConfirm))

        if(Number(userId) === user_Id && password === passwordConfirm){
            console.log("Log In Success")
        }
    }
  return (
    <div>
        <input type={"number"} value={userId} onChange={(e)=>setUserId(e.target.value)}/>
        <input type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>validateUserDetails()}>Log In</button>
    </div>
  )
}

export default LoginPageValidation