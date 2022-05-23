import React, { useState } from 'react'

const Test = () => {
    const [details, setUserDetails] = useState({
        password: "",
        name: "",
        creditcardno: 0,
        creditcardmonth: 0,
        creditcardyear: 0,
        age: 0,
    });

    const handleNameValidation = () => {
        var nameTest = {details}
        var patternMatching = /(^(\w[a-zA-Z]{0,15})+\s+(\w[a-zA-Z]{0,15}))/gm;  //^[A-Za-z][A-Za-z_]{0,30}$  //^(\w[a-zA-Z]{0,30})  //(^(\w[a-zA-Z]{0,15})+\s+(\w[a-zA-Z]{0,15}))  //^(\w[a-zA-Z]{0,15})|\s+(\w[a-zA-Z]{0,15})
        var result = nameTest.details.name.match(patternMatching)
        console.log("Called Validation",result)
        if(String(result) === details.name){
            console.log(result);
            console.log("Success")
        }
    }
  return (
    <div>
        <input type={"text"} value={details.name} onChange={(e)=>setUserDetails({...details.name,name:e.target.value})}/>
        <button onClick={handleNameValidation}>Click To Check</button>
    </div>
  )
}

export default Test