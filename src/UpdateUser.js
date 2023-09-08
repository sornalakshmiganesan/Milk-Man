import { useState, useEffect } from "react"
import { userArr}  from "./App"
import { useNavigate } from "react-router-dom";



export default function UpdateUser(){

    const[selectedName,changeSelectedName]=useState('')
    const[selectedUser,changeSelectedUser]=useState('')

    console.log(userArr);   

    function handleSelect(e){
        let selname=String(e.target.value);
        changeSelectedName(selname);
        let seluser= userArr.find(user=>(user.name===selname));
        changeSelectedUser(seluser);

          }

    
    console.log('inside',selectedUser);

    return(
    <div className="container-fluid">
    <select className="btn btn-info dropdown-toggle" id='user' name="select user" onChange={handleSelect}> 
                <option selected disabled>Choose User</option>
            {userArr.map(user=>(
                <option value={user.name}>{user.name}</option>

            ))}
        
    </select>
    <br>
    </br>
    <br>
    </br>
    <Update user={selectedUser}/>

    </div>
    )
}

function Update(user){
    const nav=useNavigate();
     const [initname,setinitname]=useState('');
     const [initdoj,setinitdoj]=useState('');
    useEffect(()=>{
      setinitname(user.user.name)
    },[user.user.name]);
    useEffect(()=>{
      setinitdoj(user.user.doj)
    },[user.user.doj]);     
    

      const handleChange=(e)=>{
        setinitname(e.target.value);
    };
    
    const handleChange1=(e)=>{
       setinitdoj(e.target.value);
    }

    const handleAdd=()=>{
      user.user.name=initname
      user.user.doj=initdoj
      nav('/');
      alert("User update successful!");
      console.log('Hi',user);
      
    
    }
    
      return(
        <div class="container-fluid">
          <h2 class="form-label">Name:</h2>
          <input class='form-control' type='text' name='name' value={initname} onChange={handleChange}></input>
          <h2 class="form-label">Date of Join:</h2>
          <input class='form-control' type='date' name='doj' value={initdoj} onChange={handleChange1}></input>   
           
           <br></br>
          <button class="btn btn-primary" onClick={handleAdd}>Update</button>
        </div>
      )
    }
