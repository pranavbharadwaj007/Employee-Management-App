import './App.css';
import axios from 'axios'
import {useState,useEffect} from "react"
import Employee from './Employee'
import FormPost from './FormPost';


function App() {
  const [emp,setEmp]=useState([]);
  const [sig,setsig]=useState({})
  useEffect(()=>{
    axios.get(`/all`).then(res=>{
      //console.log(res);
      //console.log(res.data)
      setEmp(res.data)});
  },[emp])

  function handleclk(id){
    console.log(id)
    axios.delete(`/delete-emp/${id}`)
    .then(res=>console.log("Deleted "+res))
    .catch(err=>console.log(err))

  }

  return (
    <>
    <div children="App">
      <div><h1>Employee Managment Application</h1></div>
      <FormPost />
      <Employee employe={emp} handleclk={handleclk} />
    </div>
    
    </>
  );
}

export default App;
