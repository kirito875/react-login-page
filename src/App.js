import { Routes, Route } from "react-router";
import Loginpage from "./loginpage/Loginpage";
import Userdetails from "./userdetails/Userdetails";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/loginsuccess" element={<Userdetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
