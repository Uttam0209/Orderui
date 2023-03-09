import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./css/Admin.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const locate = useLocation();
  const [activelink, setActiveLink] = useState(locate.pathname.substring(1));
  const collapseActive = (id) => {
    document.body.classList.remove("sidebar-open");
    document.body.classList.add("sidebar-closed");
    switch (id) {
      case 1:
        navigate("/dashboard");
        break;
      case 2:
        navigate("/electricityview");
        break;
      case 3:
        navigate("/additionalquipmentview");
        break;
      case 4:
        navigate("/telephoneview");
        break;
      case 5:
        navigate("/menpowerview");
        break;
      case 6:
        navigate("/golfview");
        break;
      case 7:
        navigate("/audioview");
        break;
      case 8:
        navigate("/pantryview");
        break;
      case 9:
        navigate("/printingview");
        break;
      case 10:
        navigate("/paymentstatus");
        break;
    }
  };

  document.body.addEventListener("click", () => {
    collapseActive();
  });

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link
          to={""}
          className="brand-link"
          style={{ display: "flex", width: "auto" }}
        >
          <img src="./Images/Logo.png" alt="AdminLTE Logo" />
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon className
         with font-awesome or any other icon font library */}
              <li
                className={
                  activelink === "dashboard" ? "nav-item menu-open" : "nav-item"
                }
                id="1"
              >
                <span onClick={(e) => collapseActive(1)} className="nav-link">
                  <i className="fas fa-tachometer-alt mr-2"></i>
                  <p>
                    Dashboard
                    {/* <i className="right fas fa-angle-left" /> */}
                  </p>
                </span>
              </li>
              {localStorage.getItem("user_name") === "Admin" ? (
                <></>
              ) : (
                <>
                  {" "}
                  <li
                    className={
                      activelink === "electricityview" ||
                      activelink === "electricity"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="2"
                  >
                    <span
                      onClick={(e) => collapseActive(2)}
                      className="nav-link"
                    >
                      <i class="fas fa-bolt mr-2"></i>
                      <p>
                        Electricity
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  <li
                    className={
                      activelink === "additionalquipmentview" ||
                      activelink === "additionalequipment"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="4"
                  >
                    <span
                      onClick={(e) => collapseActive(3)}
                      className="nav-link"
                    >
                      <i className="fas fa-users-cog mr-2"></i>
                      <p>
                        Additional Equipment
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  <li
                    className={
                      activelink === "telephoneinternet" ||
                      activelink === "telephoneview"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="5"
                  >
                    <span
                      onClick={(e) => collapseActive(4)}
                      className="nav-link"
                    >
                      <i className="fas fa-globe-asia mr-2"></i>
                      <p>
                        Wi-Fi/Internet
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  <li
                    className={
                      activelink === "menpower" || activelink === "menpowerview"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="5"
                  >
                    <span
                      onClick={(e) => collapseActive(5)}
                      className="nav-link"
                    >
                      <i className="fas fa-users-cog mr-2"></i>
                      <p>
                        Temporary staff
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  <li
                    className={
                      activelink === "golf" || activelink === "golfview"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="6"
                  >
                    <span
                      onClick={(e) => collapseActive(6)}
                      className="nav-link"
                    >
                      <i class="fas fa-golf-ball mr-2"></i>
                      <p>
                        Golf cart
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  <li
                    className={
                      activelink === "audio" || activelink === "audioview"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="7"
                  >
                    <span
                      onClick={(e) => collapseActive(7)}
                      className="nav-link"
                    >
                      <i class="fas fa-microphone-alt mr-2"></i>
                      <p>
                        Audio / Visual
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  <li
                    className={
                      activelink === "pantry" || activelink === "pantryview"
                        ? "nav-item menu-open"
                        : "nav-item"
                    }
                    id="8"
                  >
                    <span
                      onClick={(e) => collapseActive(8)}
                      className="nav-link"
                    >
                      <i class="fas fa-store-alt mr-2"></i>
                      <p>
                        Pantry
                        {/* <span className="right badge badge-danger">New</span> */}
                      </p>
                    </span>
                  </li>
                  
                  {" "}
                </>
              )}
              <li
                className={
                  activelink === "paymentstatus"
                    ? "nav-item menu-open"
                    : "nav-item"
                }
                id="9"
              >
                <span onClick={(e) => collapseActive(10)} className="nav-link">
                  &#8377; &nbsp;
                  <p>
                    My Payment
                    {/* <span className="right badge badge-danger">New</span> */}
                  </p>
                </span>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Sidebar;
