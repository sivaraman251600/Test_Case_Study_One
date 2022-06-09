import React, { useEffect, useState } from 'react'
import axios from "axios"

const ForEachJson = () => {
    const [iterateDetails, setIterateDetails] = useState([])
    const [citiesName, setCitiesName] = useState([])

    const cityArray = []
    useEffect(()=>{
        axios.get('http://localhost:3005/cityList')
        .then(res=>setIterateDetails(res.data))
        .catch(err=>console.log(err))
    },[citiesName])
    for(let cities of iterateDetails){
        var city = cities.cityName
        cityArray.push(city)
    }
    console.log(cityArray)
    // const [showobject, setShowObject] = useState({})
    // console.log(showobject)
  return (
    <div>
        <p>For Each Loop For Json Data</p>
        {/* <button onClick={()=>getDetails()}>GET DETAILS</button> */}
        {
            <select>
                {
                    cityArray.map((city)=><option>{city}</option>)
                }
            </select>
        }
    </div>
  )
}

export default ForEachJson