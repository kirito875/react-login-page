import React,{useEffect,useState} from 'react';
import { Navigate } from 'react-router';
import empdata from '../empdata';

function Userdetails(){
    const [empData,setEmpData]=useState([]);

    useEffect(()=>{
        setEmpData(JSON.parse(empdata));
       },[]);


    if(!sessionStorage.getItem("username")){
        return (<Navigate to='/'/>)
    }
  

    return(<div>
     <table className='table table-stripped'>
      <thead>
        <tr>
        <td>Employee name</td>
        <td>Employee ID</td>
       {sessionStorage.getItem("Access")==="Admin"&& <td>Employee salary</td>}    
        </tr>  
      </thead> 
      <tbody>
      {  empData.map((obj)=>(<tr>
            <td>{obj.empName}</td>
            <td>{obj.empId}</td>
           { sessionStorage.getItem("Access")==="Admin"&&  <td>{obj.empSalary}</td>}</tr>))
      }
      </tbody>

     </table>
    </div>);
}

export default Userdetails;

