import React, { useState } from "react";
import axios from "axios"

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
    if (
      details.password.trim() !== "" &&
      details.name.trim() !== "" &&
      details.creditcardno !== 0 &&
      details.creditcardmonth !== 0 &&
      details.creditcardyear !== 0 &&
      details.age !== 0
    ) {
      var nameTest = { details };
      var patternMatchingName = /(^(\w[a-zA-Z]{0,15})+\s+(\w[a-zA-Z]{0,15}))/gm; //^[A-Za-z][A-Za-z_]{0,30}$  //^(\w[a-zA-Z]{0,30})  //(^(\w[a-zA-Z]{0,15})+\s+(\w[a-zA-Z]{0,15}))  //^(\w[a-zA-Z]{0,15})|\s+(\w[a-zA-Z]{0,15})
      var resultName = nameTest.details.name.match(patternMatchingName);
      console.log("Called Validation", resultName);

      var passwordTest = { details };
      var patternMAtchingPassword =
        /(^((\w[a-zA-Z]{0,12}))+((@)|(#)|(%)|(!))+((\w[a-zA-Z0-9]{0,15})))/gm;
      var resultPassword = passwordTest.details.password.match(
        patternMAtchingPassword
      );

      var resultCreditCardNo = details.creditcardno.toString().length;
      var resultCreditCardMonth = details.creditcardmonth.toString().length;
      var resultCreditCardYear = details.creditcardyear.toString().length;
      var resultAge = details.age.toString().length;

      if (String(resultName) === details.name) {
        console.log(resultName);
        console.log("Name Success");
      }

      if (String(resultPassword) === details.password) {
        console.log(resultPassword);
        console.log("Password Success");
      }

      if (Number(resultCreditCardNo) === 16) {
        console.log(resultCreditCardNo);
        console.log("Credit Card Number Success");
      }

      if (
        Number(resultCreditCardMonth) === 2 &&
        details.creditcardmonth > 0 &&
        details.creditcardmonth < 13
      ) {
        console.log(resultCreditCardMonth);
        console.log("Credit Card Month Success");
      }

      if (
        resultCreditCardYear === 4 &&
        details.creditcardyear > 2022 &&
        details.creditcardyear <= 2030
      ) {
        console.log(resultCreditCardYear);
        console.log("Credit Card Year Success");
      }

      if (resultAge === 2 && details.age > 17 && details.age < 100) {
        console.log(resultAge);
        console.log("Age Success");
      }

      if (
        String(resultName) === details.name &&
        String(resultPassword) === details.password &&
        Number(resultCreditCardNo) === 16 &&
        Number(resultCreditCardMonth) === 2 &&
        details.creditcardmonth > 0 &&
        details.creditcardmonth < 13 &&
        resultCreditCardYear === 4 &&
        details.creditcardyear > 2022 &&
        details.creditcardyear <= 2030 &&
        resultAge === 2 &&
        details.age > 17 &&
        details.age < 100
      ) {
          axios.post('http://localhost:3002/posts',details)
          .then(res=>console.log(res.data))
          .catch(err=>console.log(err.message))
      }
    }
  };
  return (
    <div>
      <label>Full Name</label>
      <input
        type={"text"}
        value={details.name}
        onChange={(e) => setUserDetails({ ...details, name: e.target.value })}
      />
      <br />
      <label>Password</label>
      <input
        type={"password"}
        value={details.password}
        onChange={(e) =>
          setUserDetails({ ...details, password: e.target.value })
        }
      />
      <br />
      <label>Credit Card No</label>
      <input
        type={"number"}
        value={details.creditcardno}
        maxLength={16}
        onChange={(e) =>
          setUserDetails({ ...details, creditcardno: e.target.value })
        }
      />
      <br />
      <label>Credit Card Month</label>
      <input
        type={"number"}
        value={details.creditcardmonth}
        onChange={(e) =>
          setUserDetails({ ...details, creditcardmonth: e.target.value })
        }
      />
      <br />
      <label>Credit Card Year</label>
      <input
        type={"number"}
        value={details.creditcardyear}
        onChange={(e) =>
          setUserDetails({ ...details, creditcardyear: e.target.value })
        }
      />
      <br />
      <label>Age</label>
      <input
        type={"number"}
        value={details.age}
        onChange={(e) => setUserDetails({ ...details, age: e.target.value })}
      />
      <br />
      <button onClick={handleNameValidation}>Click To Check</button>
    </div>
  );
};

export default Test;
