import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./helper";
import { userArr } from "./App";


function AddUser(){
  
  const nav=useNavigate();
  const[input,changeInput]=useState({
    name:'',
    doj:'',
  });
   
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    changeInput((prev)=>{
      return{...prev,[name]:value};
  });
};
const handleAdd=()=>{
  userArr.push(input);
  console.log(userArr);
  nav('/');
  alert("Successfully added a new user!");


}

  return(
    <div>
      <h2>Name:</h2>
      <input type='text' name='name' value={input.name} onChange={handleChange}></input>
      <h2>Date of Join:</h2>
      <input type='date' name='doj' value={input.doj} onChange={handleChange}></input>   
       <button onClick={handleAdd}>Add</button>
    </div>
  )
}
export default AddUser;