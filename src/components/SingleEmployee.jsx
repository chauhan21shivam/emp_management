import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const SingleEmployee = () => {
  let { id }  = useParams();
  console.log(id);

  let [emp, setEmp] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let getData = async () => {
      let { data } = await axios.get("http://localhost:4000/employees/" + id);
      console.log(data);
      setEmp(data);
    };
    getData();
  }, []);

  console.log(emp);
  return (
    <>
      <h1>Dear {emp.name} !!!</h1>
      <h2>Your Email id is {emp.email}</h2>

      <center>
        <NavLink to={`/viewall/`}>
          <button>
            <h3>Back</h3>
          </button>
        </NavLink>
      </center>
    </>
  );
};

export default SingleEmployee;
