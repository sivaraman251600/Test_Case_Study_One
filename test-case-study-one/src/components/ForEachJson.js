import React, { useState } from 'react'
import axios from "axios"

const ForEachJson = () => {
    const [iterateDetails, setIterateDetails] = useState([])
    const getDetails = () => {
        axios.get('http://localhost:3005/cityList')
        .then(res=>setIterateDetails(res.data))
        .catch(err=>console.log(err))
    } 

    const [showobject, setShowObject] = useState({})
    console.log(showobject)
  return (
    <div>
        <p>For Each Loop For Json Data</p>
        <button onClick={()=>getDetails()}>GET DETAILS</button>
        {
            iterateDetails.forEach((obj)=>{
                Object.entries(obj).forEach(([key, value]) => {
                    console.log(`${key} ${value}`)
                })                
            })
        }
    </div>
  )
}

export default ForEachJson