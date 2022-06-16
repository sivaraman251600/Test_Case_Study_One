import axios from "axios";
import React, { useEffect, useState } from "react";

function MultipleCheckBox() {
  const [storeCities, setStoreCities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/cityList")
      .then((res) => setStoreCities(res.data))
      .catch((err) => console.log(err));
  }, []);

  var cityNames = [];
  for (let cities of storeCities) {
    cityNames.push(cities.cityName);
  }

  const [checked, setChecked] = useState(false);
  let citiesArr = []
  const checkBoxFunc = (cityname) => {
    console.log("Calling -----> checkBoxFunc");
    citiesArr.push(cityname)
    console.log(citiesArr)
  };

  const removeCheckBoxFunc = (cityname) =>{
      console.log("Calling ---> removeCheckBoxFunc")
      citiesArr.some((city)=>city === cityname)
      console.log(citiesArr)
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>city Name</th>
          </tr>
          {cityNames.map((cityname) => (
            <tr>
              <td>{cityname}</td>
              <td>
                <input
                  type={"checkbox"}
                  name="cityname"
                  onChange={() => {
                    if (checked) {
                        setChecked(!checked)
                        removeCheckBoxFunc(cityname);
                    } else {
                        setChecked(!checked)
                        checkBoxFunc(cityname);
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultipleCheckBox;
