import { Routes, Route } from "react-router";
import { useNavigate,useLocation } from "react-router-dom";
import Loginpage from "./loginpage/Loginpage";
import Userdetails from "./userdetails/Userdetails";
import './App.css';


function App() {

  const navigate=useNavigate();
  const location=useLocation();

  const userLogout=()=>{
    navigate('/');
    sessionStorage.clear();
  }

  return (
    <div className="App">
      {(sessionStorage.getItem("username")&&location.pathname!=='/')?<div className="logout-button">
      <button className="btn btn-danger"onClick={userLogout}>logout</button>
      </div>:<></>}
     
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/loginsuccess" element={<Userdetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
