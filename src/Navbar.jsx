import {  Link } from "react-router-dom";


export default function Navigate(){
    return(
    <>
       <nav>
          <ul>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to='/AddUser'>Add User</Link>
            </li>
            <li>
                 <Link to='/UpdateUser'>Update User</Link>
            </li>
          </ul>
       </nav>
    
    </>
    );
}
