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

    <div className="container-fluid">
    <select className="btn btn-info dropdown-toggle fs-4 fw-bold" id='user' name="select user" onChange={handleSelect}> 
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
    </div>
    )
}

function Update(user){
    
    console.log('from update',user);
    const nav=useNavigate();
     const [initname,setinitname]=useState('');
     const [initdoj,setinitdoj]=useState('');
     const [initmilkPurchased,setinitmilkPurchased]=useState('');
     const [initbalance,setinitbalance]=useState('');

    useEffect(()=>{
      setinitname(user.user.name)
    },[user.user.name]);

    useEffect(()=>{
      setinitdoj(user.user.doj)
    },[user.user.doj]);   

    useEffect(()=>{
      setinitmilkPurchased(user.user.milkPurchased)
    },[user.user.milkPurchased]);     

    useEffect(()=>{
      setinitbalance(user.user.balance)
    },[user.user.balance]);     
    

      const handleChange=(e)=>{
        setinitname(e.target.value);
    };
    
    const handleChange1=(e)=>{
       setinitdoj(e.target.value);
    }

    const handleChange2=(e)=>{
      setinitmilkPurchased(e.target.value);
   }
   const handleChange3=(e)=>{
    setinitbalance(e.target.value);
 }

    const handleAdd=()=>{
      user.user.name=initname
      user.user.doj=initdoj
      user.user.milkPurchased=initmilkPurchased
      user.user.balance=initbalance
      nav('/');
      alert("User update successful!");
      console.log('Hi',user);
      
    
    }
    
      return(
        <div className="container-fluid">
          <h2 className="form-label">Name:</h2>
          <input className='form-control fs-4'style={{'max-width': '18rem'}} type='text' name='name' value={initname} onChange={handleChange}></input>
          <h2 className="form-label">Customer Since(days):</h2>
          <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='doj' value={initdoj} onChange={handleChange1}></input>   
          <h2 className="form-label">Milk Purchased(litres):</h2>
          <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='milkPurchased' value={initmilkPurchased} onChange={handleChange2}></input>   
          <h2 className="form-label">Balance(Rs):</h2>
          <input className='form-control fs-4' style={{'max-width': '18rem'}} type='text' name='balance' value={initbalance} onChange={handleChange3}></input>   

           <br></br>
          <button className="btn btn-primary fs-4 fw-bold" onClick={handleAdd}>Update</button>
        </div>
      )
    }
