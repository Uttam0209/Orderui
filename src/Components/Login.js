import React, { useState, useEffect } from "react";
import "./css/Login.css";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import { Loginuser, Loginuserdirect } from "./Services/BasicAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
const Login = () => {
  const locate = useLocation();
  const [LoginLoad, setLoginLoad] = useState(false)
  let EncPram = "";
  useEffect(() => {
    EncPram = locate.search.slice(locate.search.slice(8, locate.search.length));
   
    if (EncPram !== "") {
      setLoginLoad(true)
      Loginuserdirect(EncPram.substring(9)).then((resp) => {
        if (resp.length !== 0) {
          Loginuser({
            username: resp[0].contactEmail,
            password: resp[0].secureKey,
          }).then((resp) => {
            if (resp.status === 200) {
              resp.json().then((res) => {
                localStorage.setItem("user_id", res.companyUniqueID);
                localStorage.setItem("user_email", res.contactEmail);
                localStorage.setItem("user_name", res.companyName);
                localStorage.setItem("contact_name", res.contactName);
                localStorage.setItem("user_country", res.country);
                localStorage.setItem("user_hallNo", res.hallNo);
                localStorage.setItem("user_stallNo", res.stallNo);
                localStorage.setItem("user_stallSize", res.stallSize);
                localStorage.setItem("jwtToken", res.jwtToken);
              
                navigate("/dashboard");
              });
            } else {
              toast.warn("Wrong email id or password");
            }
          });
        }
      });
    }
  }, []);
  console.log(locate.search.substring(9));

  const navigate = useNavigate();
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
  });

  const LoginClick = () => {
    if (userdata.username === "" || userdata.password === "")
      toast.warn("Please fill email id or password");
    else {
      Loginuser(userdata).then((resp) => {
        if (resp.status === 200) {
          resp.json().then((res) => {
            localStorage.setItem("user_id", res.companyUniqueID);
            localStorage.setItem("user_email", res.contactEmail);
            localStorage.setItem("user_name", res.companyName);
            localStorage.setItem("contact_name", res.contactName);
            localStorage.setItem("user_country", res.country);
            localStorage.setItem("user_hallNo", res.hallNo);
            localStorage.setItem("user_stallNo", res.stallNo);
            localStorage.setItem("user_stallSize", res.stallSize);
            localStorage.setItem("jwtToken", res.jwtToken);
            navigate("/dashboard");
          });
        } else {
          toast.warn("Wrong email id or password");
        }
      });
    }
  };
  if (!LoginLoad) {
  return (
    <>
      <Header />
      <div id="bgimg">
        <div className="container">
          <div className="row justify-content-center aling-items-center">
            <div className="col-8 py-5 py-lg-5 Login-Card ">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img
                    src="./Images/logo.png"
                    className="img-fluid w-50"
                    alt=""
                  />
                </div>

                <div className="col-md-6">
                  <form>
                    <h1 className="text-center mb-3 text-dark">
                      {" "}
                      <i class="fas fa-lock-open"></i> Login
                    </h1>
                    <div class="row">
                      <div class="mb-3">
                        <input
                          className="form-control Login-Input"
                          type="email"
                          name="username"
                          autocomplete="off"
                          placeholder="Username"
                          onChange={(e) => {
                            setUserData({
                              ...userdata,
                              username: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3">
                        <input
                          className="form-control Login-Input"
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setUserData({
                              ...userdata,
                              password: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="buttonLog btn-info"
                      onClick={LoginClick}
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
                      }else {
                         return (
                          <>
                          <Header />
                          <div id="bgimg">
                          <div className="container">
                          <div className="row justify-content-center aling-items-center">
                          <div className="col-8 py-5 py-lg-5 Login-Card ">
                          <div className="row">
                          <div className="col-md-12 d-flex justify-content-center align-items-center">
                          <img
                          src="./Images/loader.gif" />
                        </div>
                        </div>
                         </div>
                        </div></div></div>
                          </>
                        )
                      }};

export default Login;
