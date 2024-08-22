import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const ViewAll = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let { data } = await axios.get("http://localhost:4000/employees");
      console.log(data);
      setData(data);
    };
    getData();
  },[]);
  
  
  
  return (
    <>
      <h2>All Employees</h2>

      <table border="" id="displayingTable">
        <thead>
          <tr>
            <th>Emp id</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="3">Options</th>
          </tr>
        </thead>

        <tbody>
          {data.reverse().map(val => {
            console.log(val);

            let { id, name, email } = val;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <NavLink to={`/viewsingle/${id}`}>
                    <button>View More</button>
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/update/${id}`}>
                    <button>Update</button>
                  </NavLink>
                </td>
                <td>
                  <button
                    onClick={() => {
                      axios.delete("http://localhost:4000/employees/" + id);
                      window.location.assign("http://localhost:3000/viewall");
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <center>
        <NavLink to={`/addemp/`}>
          <button>
            <h3>Add More Employees</h3>
          </button>
        </NavLink>
      </center>
    </>
  );
}
export default ViewAll