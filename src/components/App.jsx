/*
----------------------------- bad writen -------
function App() {
  const [fName, setFName] = useState(" ");
  const [lName, setLName] = useState(" ");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }
  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

----------------------------------------------
*/

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  /* 
   And you must never try to access those events 
   when you're trying to use one of these 
   stateful setters.

   - don't use events inside state methods

   - you should not ever use event
  */
  function handleChange(event) {
    //const newValue = event.target.value;
    //const inputName = event.target.name;

    // we can use eventes like here
    // don't use it inside state methods

    const { value, name } = event.target;
    setFullName((prevValue) => {
      // if (inputName === "fName") {
      if (name === "fName") {
        return {
          // fName: newValue,
          fName: value,
          lName: prevValue.lName
        };
      } // else if (inputName === "lName") {
      else if (name === "lName") {
        return {
          fName: prevValue.fName,
          // lName: newValue
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
