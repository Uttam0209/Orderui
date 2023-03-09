import React, { useEffect, useState } from "react";
import "./css/Admin.css";
import { Link, useNavigate } from "react-router-dom";
import {
  GetEquipmentRentalByid,
  GetPowerRequestByid,
  GetAudioByid,
  GetGolfByid,
  GetPantryByid,
  GetPrintingByid,
  GetTelephoneDataByid,
  GetTemporaryStaffByid,
  GetAllAudioData,
  GetAllEquipmentRental,
  GetAllGolf,
  GetAllPantry,
  GetPowerRate,
  GetAllPrinting,
  GetTelephoneData,
  GetTemporaryStaff,
  GetAllPowerData,
} from "./Services/BasicAPI";
import Footer from "./Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const [electCount, setElectCount] = useState([]);
  const [equipCount, setEquipCount] = useState([]);
  const [menpowerCount, setMenpowerCount] = useState([]);
  const [audioCount, setAudioCount] = useState([]);
  const [golfCount, setGolfCount] = useState([]);
  const [pantryCount, setPantryCount] = useState([]);
  const [printingCount, setPrintingCount] = useState([]);
  const [teleCount, setTeleCount] = useState([]);
  const [userlog, setUserlog] = useState(localStorage.getItem("user_id"));
  useEffect(() => {
    if (userlog === undefined || userlog === null) {
      navigate("/");
    } else {
      if (localStorage.getItem("user_name") !== "Admin") {
        GetEquipmentRentalByid(localStorage.getItem("user_id")).then((res) => {
          setEquipCount(res.data);
        });
        GetPowerRequestByid(localStorage.getItem("user_id")).then((res) => {
          setElectCount(res.data);
        });
        GetAudioByid(localStorage.getItem("user_id")).then((res) => {
          setAudioCount(res.data);
        });
        GetGolfByid(localStorage.getItem("user_id")).then((res) => {
          setGolfCount(res);
        });
        GetPantryByid(localStorage.getItem("user_id")).then((res) => {
          setPantryCount(res);
        });
        GetPrintingByid(localStorage.getItem("user_id")).then((res) => {
          setPrintingCount(res);
        });
        GetTelephoneDataByid(localStorage.getItem("user_id")).then((res) => {
          setTeleCount(res.data);
        });
        GetTemporaryStaffByid(localStorage.getItem("user_id")).then((res) => {
          setMenpowerCount(res.data);
        });
      } else {
        GetAllAudioData().then((res) => {
          setAudioCount(res.data);
        });
        GetAllEquipmentRental().then((res) => {
          setEquipCount(res.data);
        });
        GetAllPowerData().then((res) => {
          setElectCount(res.data);
        });

        GetAllGolf().then((res) => {
          setGolfCount(res);
        });
        GetAllPantry().then((res) => {
          setPantryCount(res);
        });
        GetAllPrinting().then((res) => {
          setPrintingCount(res);
        });
        GetTelephoneData().then((res) => {
          setTeleCount(res.data);
        });
        GetTemporaryStaff().then((res) => {
          setMenpowerCount(res.data);
        });
      }
    }
  }, []);

  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{`${electCount.length}`}</h3>
                    <p>Electricity</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>{" "}
                  <Link to="/electricityview" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{`${equipCount.length}`}</h3>
                    <p>Additional Equipment</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <Link
                    to="/additionalquipmentview"
                    className="small-box-footer"
                  >
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{`${teleCount.length}`}</h3>
                    <p>Wi-Fi/Internet</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <Link to="/telephoneview" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>{`${menpowerCount.length}`}</h3>
                    <p>Temporary staff</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <Link to="/menpowerview" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h3>{`${audioCount.length}`}</h3>
                    <p>AUDIO / VISUAL</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to="/audioview" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{`${golfCount.length}`}</h3>
                    <p>GOLF CART</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to="/golfview" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{`${pantryCount.length}`}</h3>
                    <p>PANTRY</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to="/pantryview" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              
            </div>
            {/* /.row */}
            {/* Main row */}
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
