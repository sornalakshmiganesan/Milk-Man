import './App.css';
import Navigate from './Navbar.jsx';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Dash from './Dash';
import AddUser from "./AddUser";
import UpdateUser from './UpdateUser';
import 'bootstrap/dist/css/bootstrap.css'

export const userArr=[];

function App() {
  return (
     <BrowserRouter>
      <Navigate/>
       <Routes>
          <Route path="/" element={<Dash/>}></Route> 
          <Route path='/AddUser' element={<AddUser/>}></Route>
          <Route path='/UpdateUser' element={<UpdateUser/>}></Route>

      </Routes>
    
      </BrowserRouter>
  );
}

export default App;
