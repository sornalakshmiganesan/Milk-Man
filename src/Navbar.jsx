import {  Link } from "react-router-dom";
import './App.css'


export default function Navigate(){
    return(
     <div className="container-fluid">
       <nav className="navbar navbar-dark bg-dark text-white">
          <ul className="nav nav-tabs text-white">
            <li className="nav-item fs-3 fw-bold text-white">
                <Link to="/">Dashboard</Link>
            </li>
            <li className="nav-item fs-3 fw-bold">
                <Link to='/AddUser'>Add User</Link>
            </li>
            <li className="nav-item fs-3 fw-bold text-decoration-none">
                 <Link to='/UpdateUser'>Update User</Link>
            </li>
          </ul>
       </nav>
    
       </div>
    );
}
