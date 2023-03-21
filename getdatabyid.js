import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GetDataById =()=>{
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
        </div>
        </div>
        </div>
    )
};

export default GetDataById;
