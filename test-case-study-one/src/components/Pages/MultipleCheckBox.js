import axios from "axios";
import React, { useEffect, useState } from "react";

function MultipleCheckBox() {
  const [storeCities, setStoreCities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/cityList")
      .then((res) =>
        setStoreCities(
          res.data.map((city) => ({ city: city, selected: false }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const callingFuncOne = (cityId, checked) => {
    const cities = storeCities.map((current) => {
      return current.city.cityId === cityId
        ? { ...current, selected: checked }
        : { ...current };
    });
    setStoreCities(cities);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>city Name</th>
          </tr>
          {storeCities.map((cityname) => (
            <tr key={cityname.city.cityName}>
              <td>{cityname.city.cityName}</td>
              <td>
                <input
                  type={"checkbox"}
                  checked={cityname.selected}
                  onChange={(ev) =>
                    callingFuncOne(
                      cityname.city.cityId,
                      ev.currentTarget.checked
                    )
                  }
                />
              </td>
            </tr>
          ))}
          <tr>
            <th>Added City List</th>
          </tr>
          {storeCities
            .filter((value) => value.selected)
            .map((cityname) => (
              <tr key={cityname.city.cityName}>
                <td>{cityname.city.cityName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultipleCheckBox;
