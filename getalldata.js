
import { useNavigate } from "react-router-dom";

export const GetAllData =()=>{

    const navigate =useNavigate();

    const displayAll = () => {
            navigate("/displayAll");
        }

    return (
        <div className="display">
        <div className="container-fluid">
        <div className="display-box">
        

        <div className="input middle">
        <center>
            <button type="button" className="btn btn-secondary" onClick={displayAll} style={{marginLeft:"1rem"}}>
            SearchAll
        </button>
        </center>
        </div>
        </div>
        </div>
        </div>
    )
};

export default GetAllData;

