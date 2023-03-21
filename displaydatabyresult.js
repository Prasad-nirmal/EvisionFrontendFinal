import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function DisplayDataByResult(){
  const [result, setResult] = useState("");

  const display =()=>{
    if (result.length < 4 ){
        toast.error("Enter A Valid Input");
    }
    else{
        axios
        .get("http://localhost:8080/filterbyresult/", {
            result
        })
        .then((response) => {
          const data = response.data;
          console.log(data)
        //   sessionStorage.setItem("data",data);
  })
  }}
    return(
            <div className="display">
            <div className="container-fluid">
            <div className="display-box">
            <div className="input">
            <input type={"text"} className="input-box form-control" id="result" placeholder="       Enter The Result"
            onChange={(event) => setResult(event.target.value)}></input>
            <br></br>
                <center>
            <button type="button" className="btn btn-secondary" onClick={display}>
                Search
            </button>
                </center>
            </div>
            </div>
            </div>
            </div>
        )
    };

export default DisplayDataByResult;