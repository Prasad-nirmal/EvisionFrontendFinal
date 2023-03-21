import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GetDataByIdRange =()=>{
    const [imgId , setImgId] = useState("");

    const navigate =useNavigate();

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

export default GetDataByIdRange;

