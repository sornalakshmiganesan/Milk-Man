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
    <div className="container-fluid">
      <div className="container-fluid">
      <h2 className="form-label">Name:</h2>
      <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='name' value={input.name} onChange={handleChange}></input>
      <h2 className="form-label">Customer Since(days):</h2>
      <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='doj' value={input.doj} onChange={handleChange}></input>   
      <h2 className="form-label">Milk Purchased(litres):</h2>
      <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='milkPurchased' value={input.milkPurchased} onChange={handleChange}></input>   
      <h2 className="form-label">Balance(Rs):</h2>
      <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='balance' value={input.balance} onChange={handleChange}></input>   


       <br></br>
       <button className="btn btn-primary fs-4 fw-bold" onClick={handleAdd}>Add</button>
    </div>
    </div>

  )
}
export default AddUser;