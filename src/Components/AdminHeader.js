import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const Logoutbtn = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("contact_name");
    localStorage.removeItem("user_country");
    localStorage.removeItem("user_hallNo");
    localStorage.removeItem("user_stallNo");
    localStorage.removeItem("user_stallSize");
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-expand-admin navbar-white navbar-light d-flex justify-content-between">
        {/* Left navbar links */}

        <ul
          className="navbar-nav d-flex w-25"
          style={{ justifyContent: "inherit" }}
        >
          <li className="nav-item" id="ToggleAuto">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto ">
          <li className="d-flex">
            <span class="nav-link active d-flex">
              <b>EMAIL: &nbsp;</b>
               aeroindia@pavilionsinteriors.com
            </span>
          </li>
          <li className="d-flex">
            <span class="nav-link active d-flex">
              <b>PHONE: &nbsp;</b>
              +91 120 4513400-01
            </span>
          </li>
          <li className="nav-item d-inline-block d-sm-inline-block">
            <div className="btn-group">
              <button
                className="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="fas fa-user-circle"
                  style={{ fontSize: "25px", color: "#7b3131" }}
                ></i>{" "}
                {localStorage.getItem("contact_name")}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-Log"
                aria-labelledby="dropdownMenuButton"
              >
                {/* <li>
                  <Link to="/profile">
                    <span className="dropdown-item dropdown-item-Log">
                      Profile
                    </span>
                  </Link>
                </li> */}
                <li>
                  <hr className="dropdown-divider dropdown-divider-Log" />
                </li>

                <li>
                  <span
                    className="dropdown-item dropdown-item-Log"
                    onClick={Logoutbtn}
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <div>
        <nav className="bgcolor main-header navbar-expand navbar-expand-admin navbar-white navbar-light d-flex justify-content-between">
          <div class="col-md-12 text-nowrap">
            <div class="container px-lg-2 px-3">
              <div class="row">
                <div class="col-md-4">
                  <label class="label font-weight-bold">Company </label>:{" "}
                  {localStorage.getItem("user_name")}
                </div>

                <div class="col-md-4">
                  <label class="label font-weight-bold">Email </label>:{" "}
                  {localStorage.getItem("user_email")}
                </div>
                <div class="col-md-4">
                  <label class="label font-weight-bold">Country </label>:{" "}
                  {localStorage.getItem("user_country")}
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label class="label font-weight-bold">Hall No </label>:{" "}
                  {localStorage.getItem("user_hallNo")}
                </div>

                <div class="col-md-4">
                  <label class="label font-weight-bold">Stall No. </label>:{" "}
                  {localStorage.getItem("user_stallNo")}
                </div>
                <div class="col-md-4">
                  <label class="label font-weight-bold">Size </label>:{" "}
                  {localStorage.getItem("user_stallSize")} SQM
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminHeader;
