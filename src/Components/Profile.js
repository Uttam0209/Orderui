import React from "react";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

const Profile = () => {
  return (
    <div>
      <AdminHeader />
      <Sidebar />
      <div>
        <div className="content-wrapper">
          <div className="container px-lg-5 px-3">
            <h2>Profile</h2>
            <div className="row">
              <div className="col-7 mx-auto">
                <div className="card shadow p-4">
                  <div className="card-body Line-height-card">
                    <div className="row justify-content-between">
                      {" "}
                      <div
                        className="col-12"
                        style={{
                          borderTop: "1px solid grey",
                          borderBottom: "1px solid grey",
                          padding: "5px",
                        }}
                      >
                        <span className="UpdateRateSpan">
                          <b>User Details</b>{" "}
                        </span>
                      </div>{" "}
                      <div
                        className="col-6 text-end"
                        style={{
                          padding: "5px",
                        }}
                      >
                        <span className="UpdateRateSpan"></span>
                      </div>
                      <div className="col-6">
                        <span className="UpdateRateSpan">
                          <b>Company Name :</b>{" "}
                        </span>
                      </div>{" "}
                      <div className="col-6 text-end">
                        <span className="UpdateRateSpan"></span>
                      </div>
                      <div className="col-6">
                        <span className="UpdateRateSpan">
                          <b>Email id :</b>{" "}
                        </span>
                      </div>
                      <div className="col-6 text-end">
                        <span className="UpdateRateSpan">{}</span>
                      </div>
                      <div className="col-6">
                        <span className="UpdateRateSpan">
                          <b>Country :</b>
                        </span>
                      </div>{" "}
                      <div className="col-6 text-end">
                        <span className="UpdateRateSpan">{}</span>
                      </div>
                      <div className="col-6">
                        <span className="UpdateRateSpan">
                          <b>Stall No : </b>
                        </span>
                      </div>
                      <div className="col-6 text-end">
                        <span className="UpdateRateSpan">{}</span>
                      </div>
                      <div className="col-6">
                        <span className="UpdateRateSpan">
                          <b>Hall No :</b>{" "}
                        </span>
                      </div>
                      <div className="col-6 text-end">
                        <span className="UpdateRateSpan">{}</span>
                      </div>
                      <div className="col-6">
                        <span className="UpdateRateSpan">
                          <b>Currency :</b>{" "}
                        </span>
                      </div>
                      <div className="col-6 text-end">
                        <span className="UpdateRateSpan">{}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
