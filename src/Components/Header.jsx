import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const Logoutbtn = () => {};

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./Images/logo.png" className="img-fluid" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="#">
                <b>EMAIL: &nbsp;</b>
                aeroindia@pavilionsinteriors.com
              </a>
              <a class="nav-link active" href="#">
                <b>PHONE: &nbsp;</b>
                +91 120 4513400-01
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
