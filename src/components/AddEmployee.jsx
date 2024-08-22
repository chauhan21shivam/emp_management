import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  let navigate = useNavigate();

  let [emp, setEmp] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = e => {
    console.log(e.target.name, e.target.value);

    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();

    console.log(emp);

    axios.post("http://localhost:4000/employees", emp);

    setEmp({
      name: "",
      email: "",
      password: "",
    });

    navigate("/viewall");
  };
  let {name, email, password} = emp;
  return (
    
    <>
      <h2>Add Employees</h2>

      <form id="mainFormContainer" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div>
          <button>Add Employee</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
