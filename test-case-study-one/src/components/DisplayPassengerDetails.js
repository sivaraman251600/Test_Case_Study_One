import React, { useCallback, useState } from "react";

const DisplayPassengerDetails = () => {
  const [passengerDetails, setPassengerDetails] = useState([]);

  const [name , setName] = useState('')
  const [age , setAge] = useState(0)
  const displayPassenger = () => {
    setPassengerDetails([...passengerDetails,{Name:name,Age:age}])
    console.log(passengerDetails)
  }
  return (
    <div>
      <p>DisplayPassengerDetails</p>
      <table>
          <tbody>
        <tr>
          <th>Passenger Name</th>
          <th>Passenger Age</th>
        </tr>
        <tr>
          <td>
            <input
              type={"text"}
              value={name}
              onChange={(e) =>
                setName( e.target.value)
              }
            />
          </td>
          <td>
            <input
              type={"number"}
              value={age}
              onChange={(e) =>
                setAge(e.target.value,)
              }
            />
          </td>
          <td><button onClick={()=>displayPassenger()}>Add Passenger</button></td>
        </tr>
        </tbody>
      </table>
      <table>
         <tbody>
             <tr>
                 <th>Name</th>
                 <th>Age</th>
             </tr>
             {
                 passengerDetails.map(detail=>
                    <tr>
                     <td>{detail.Name}</td> 
                     <td>{detail.Age}</td>
                     </tr>
                     )
             }
         </tbody>
      </table>
    </div>
  );
};

export default DisplayPassengerDetails;
