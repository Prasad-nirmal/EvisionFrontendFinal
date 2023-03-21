import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./userLogin.css";
// import logo from "../public/logo1.png";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (emailId.length === 0) {
      toast.error("please enter the emailId");
    } else if (password.length === 0) {
      toast.error("please enter the password");
    } else {
      axios
        .post("http://localhost:8080/login", {
          emailId,
          password,
        })
        .then((response) => {
          const result = response.data;
          sessionStorage.setItem("emailId",emailId);

          if (result === "undefined") {
            toast.error("Invalid emailId ID or Password");
          } else {
            navigate("/getdatabyid");
          }
        })
    .catch((error) => {
            console.log("error");
            toast.error("Invalid Credentials!");
            console.log(error);
          });
        }
        }
    
        return (
            <div className="Login">
              <div className="container-fluid user">
                <div className="login-box">
                  <div className="logo">
                    <img src="logo.png" alt="logo1"></img>
                    </div>
                  <div className="user-box">
                    <i class="bi bi-person-circle"></i>
                  <label>Email</label>
                    <input onChange={(event) => {
                setEmailId(event.target.value);
              }}
                      className="form-control"
                      type="text"/>
                  </div>
                  <div className="user-box">
                  <i class="bi bi-person-fill-lock"></i>
                  <label>Password</label>
                    <input onChange={(event) => {
                setPassword(event.target.value);
              }}
                      className="form-control"
                      type="password"/>
                  </div>
                 
                  <div className="user-box btn">
                  <button onClick={login} className="Btn">
                    Login
                  </button>
                  </div>
                </div>
                </div>
              </div>
          );
        };
export default Login;
