import React from 'react'
import './formpost.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
function FormPost() {
    const [employee, setEmployee] = useState({
        id:0,
        names:"",
        age:0,
        desig:"",
        exp:0
      });
      function handleIdChange(e) {
        setEmployee({
          ...employee,
          id: e.target.value
        });
      }
      function handleNameChange(e) {
        setEmployee({
          ...employee,
          names: e.target.value
        });
      }
      function handleAgeChange(e) {
        setEmployee({
          ...employee,
          age: e.target.value
        });
      }
      function handleDesigChange(e) {
        setEmployee({
          ...employee,
          desig: e.target.value
        });
      }
      function handleExpChange(e) {
        setEmployee({
          ...employee,
          exp: e.target.value
        });
      }
      function postData(e){
        e.preventDefault();
        axios.post('/create-emp',{
          id:employee.id,
          name:employee.names,
          age:employee.age,
          desig:employee.desig,
          exp:employee.exp

        }).then(res=>console.log('Posting data',res)).catch(err=>console.log(err))
      }
  return (
    <>
    <div className='form-style-2'>

    <form>

   
      <label>
        ID:
        <input
        className="input-field"
          value={employee.id}
          onChange={handleIdChange}
        />
      </label>
      <label>
        Name:
        <input
        className="input-field"
          value={employee.names}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Age:
        <input
        className="input-field"
          value={employee.age}
          onChange={handleAgeChange}
        />
      </label>
      <label>

     Position:
      <select className='select-field' value={employee.desig} onChange={handleDesigChange}>
        <option value="SDE1">SDE1</option>
        <option value="SDE2">SDE2</option>
        <option value="Junior Developer">Junior Developer</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Test Engineer">Test Engineer</option>
      </select>
      </label>
      <label>
        Exp:
        <input
        className="input-field"
          value={employee.exp}
          onChange={handleExpChange}
        />
      </label>
      <button className='btn' onClick={postData}>Submit</button>

      </form>
      </div>
    
    </>
  )
}

export default FormPost