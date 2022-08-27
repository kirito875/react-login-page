import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import empdata from '../empdata';
import './Loginpage.css';

function Loginpage(){
    const [empId,setEmpId]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    const changeEmpId=(event)=>{
        setEmpId(event.target.value);
    }
    const changePassword=(event)=>{
        setPassword(event.target.value);
    }
    const submitCred=()=>{
       let empDataObj=JSON.parse(empdata);
       empDataObj.map((obj)=>{
       if(obj.empName===empId){
        if(obj.empPassword===password){
          console.log("loginsuccess");
          sessionStorage.setItem("username",obj.empName);
          sessionStorage.setItem("Access",obj.empAccess);
          navigate('/loginsuccess');
        } 
        else{
         window.alert("wrong password");
        }
       }
      }
      );
     

    } 
    
    
    return (<div className='card'>
        <div class="mb-3 row">
    <label for="empid" class="col-sm-2 col-form-label">username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="empid" value={empId} onChange={changeEmpId}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" value={password} onChange={changePassword}/>
    </div>
  </div>
    <button className='btn btn-success' onClick={submitCred}>Login</button>
    </div>
    );
}


export default Loginpage;