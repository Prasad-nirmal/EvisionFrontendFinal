import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./getData.css";

export const GetData =()=>{
    const [imgId , setImgId] = useState("");

    const navigate =useNavigate();

    const saveImgId = () => {
        if (imgId < 1){
            toast.error("Enter A Valid Image Id");
        }
        else{
            sessionStorage.setItem("imgId" , imgId);
            navigate("/displayImages");
        }
    };

    const displayAll = () => {
            navigate("/displayAll");
        }

    const displayList = () => {
        if (imgId.length < 3 ){
            toast.error("Enter A Valid Image Id");
        }
        else{
            sessionStorage.setItem("imgId" , imgId);
            navigate("/displayList");
        }
    };

    return (
        <div className="display">
        <div className="container-fluid">
        <div className="display-box">
        <div className="input">
        <input type={"number"} className="input-box form-control" id="data" placeholder="       Enter The Image Id"
        onChange={(event) => setImgId(event.target.value)}></input>
        <br></br>
            <center>
        <button type="button" className="btn btn-secondary" onClick={saveImgId}>
            Search
        </button>
            </center>
        </div>
        

        <div className="input middle">
        <center>
            <button type="button" className="btn btn-secondary" onClick={displayAll} style={{marginLeft:"1rem"}}>
            SearchAll
        </button>
        </center>
        </div>
       
        <div className="input">
        <input type={"text"} className="input-box form-control" id="data" placeholder="       Enter The Id Range"
        onChange={(event) => setImgId(event.target.value)}></input>
        <br></br>
            <center>
        <button type="button" className="btn btn-secondary" onClick={displayList} style={{marginLeft:"1rem"}}>
            Search
        </button>
            </center>
        </div>
        </div>
        </div>
        </div>
    )
};

export default GetData;

