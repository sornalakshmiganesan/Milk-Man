
import {  useState } from "react";
import { userArr } from "./App";
import './App.css'


export default function Dash(){
    

    const [delname,setdelname]=useState('');
    console.log(userArr);
    // window.onload=()=>{
    //     userArr=JSON.parse(localStorage.getItem('users'));
    // }
    
    return(
        <div className='container-fluid'>

        {userArr.map(({name,doj,milkPurchased,balance})=>(
            <div className="d-flex flex-column card text-dark bg-info mb-3" style={{'max-width': '18rem'}}>
                <button className="btn w-25 btn-danger rounded-circle fw-bold w-12" onClick={(name)=>{
                    setdelname(Math.random());
                    console.log('delete');
                    alert('User Deleted successfully');
                    return(userArr.pop(name))}}>X</button>
                <li className="fs-4" key={name}>Customer Name : {name}</li>
                <li className='fs-4'key={doj}>Customer Since (days) :   {doj}</li>
                <li className='fs-4'key={milkPurchased}>Milk Purchased (litres) :   {milkPurchased}</li>
                <li className='fs-4'key={balance}>Balance (Rs) :   {balance}</li>

            </div>
 
        ))}
        {/* {localStorage.setItem('users', JSON.stringify(userArr))} */}

        </div>
    )

}

