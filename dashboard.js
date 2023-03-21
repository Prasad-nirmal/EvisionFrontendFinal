import axios from "axios";
import { useState } from "react";
import "./dashboard.css"

function Dashboard(){
  const [result, setResult] = useState("");
  const display =()=>{
   
    
    axios
        .get("http://localhost:8080/filterbyresult/pass", {
        })
        .then((response) => {
          const count = response.data;
          console.log(count)
        sessionStorage.setItem("count",count);
  })
  }
    return(
        <div className="dashboard">
        <div className="container-fluid">
        <div className="card1">
          <div className="top"><span>{sessionStorage.getItem("count")}</span></div>
         <div className="mid"> <span className="title">Find The Image Count By Result</span>
         <br></br>
         {/* <input onClick={(event) => {
                setResult(event.target.value);
              }}
                      value="pass"
                      type="radio"/>
              <input onChange={(event) => {
                setResult(event.target.value);
              }}
                      value="fail"
                      type="radio"/> */}
         </div>
         <div className="bottom"> <button type="button" className="btn" onClick={display}>Click</button></div>
       
  </div>
</div>
</div>
);
}

export default Dashboard;