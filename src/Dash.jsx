
import {  useState } from "react";
import { userArr } from "./App";



export default function Dash(){
    

    const [delname,setdelname]=useState('');
    console.log(userArr);
    // window.onload=()=>{
    //     userArr=JSON.parse(localStorage.getItem('users'));
    // }
    
    return(
        <>

        {userArr.map(({name,doj})=>(
            <div className="user-card">
                <button onClick={(name)=>{
                    setdelname(Math.random());
                    console.log('delete');
                    return(userArr.pop(name))}}>X</button>
                <li key={name}>Customer Name: {name}</li>
                <li key={doj}>Date of Join :   {doj}</li>
            </div>
 
        ))}
        {/* {localStorage.setItem('users', JSON.stringify(userArr))} */}

        </>
    )

}

