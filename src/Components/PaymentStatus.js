import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import { GetDeEncryptData, GetPaymentStatus } from "./Services/PaymentAPI";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const PaymentStatus = () => {
  const [Audiodata, setAudiodata] = useState([]);
  const [orderid, setOrderid] = useState();
  const [DownloadModal, setDownloadModal] = useState([]);
  const [ShowDownload, setShowDownload] = useState({});

  useEffect(() => {
    GetPaymentStatus().then((res) => {
      setAudiodata(res);
    });
  }, []);

  const ViewDownloadModal = (invoice, indx) => {
    setDownloadModal([]);
    setShowDownload(Audiodata[indx]);
    setOrderid(invoice);
  };

  const generatePDF = (e) => {
    e.target.style.display = "none";
    html2canvas(document.querySelector("#pdfdata")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
      pdf.save("Payment Status.pdf");
    });
    e.target.style.display = "block";
  };

  return (
    <>
      <div>
        {" "}
        <Sidebar />
        <AdminHeader />
        <div className="content-wrapper">
          <div className="container px-lg-5 px-0">
            <div className="d-flex justify-content-between  align-items-baseline py-3">
              <h2>Payment Status</h2>{" "}
            </div>

            {Audiodata.length == 0 ? (
              <></>
            ) : (
              <>
                <div className="table-responsive my-4">
                  <table className="table  text-nowrap" id="example">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        {localStorage.getItem("user_name") === "Admin" ? (
                          <>
                            {" "}
                            <th>CompanyID</th>
                            <th>Company Name</th>
                          </>
                        ) : (
                          <></>
                        )}
                        <th>Reciept No</th>

                        <th>Transaction No</th>

                        <th>Payment Status</th>

                        <th>Amount Credited</th>
                        <th className="text-end">Currency</th>
                        <th>Purpose</th>
                        <th>Payment Date</th>

                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Audiodata.map((x, i) => {
                        return (
                          <>
                            <tr key={i}>
                              <td>{i + 1}</td>

                              {localStorage.getItem("user_name") === "Admin" ? (
                                <>
                                  {" "}
                                  <td>{x.companyUniqueID}</td>
                                  <td>{x.companyName}</td>
                                </>
                              ) : (
                                <></>
                              )}
                              <td className="text-end">{x.recieptNo}</td>

                              <td className="text-end">{x.brn}</td>

                              <td>{x.pgStatus}</td>

                              <td>{x.amountCredited}</td>
                              <td>{x.currency}</td>
                              <td className="text-end">{x.purpose}</td>
                              <td>
                                {x.paymentDate
                                  .substring(0, 10)
                                  .split("-")
                                  .reverse()
                                  .join("-")}
                              </td>

                              <td className="text-end">
                                <i
                                  class="fas fa-file-download text-end "
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Download File"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalToggle2"
                                  onClick={() =>
                                    ViewDownloadModal(x.invoiceNo, i)
                                  }
                                  style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    color: "#0a64be",
                                  }}
                                ></i>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div>
                  <div
                    class="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                  >
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                      <div class="modal-content" id="pdfdata">
                        <div className="modal-header">
                          <h3 className="modal-title">Receipt</h3>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <div className="container px-lg-5 px-3" id="pdfdata">
                            <div
                              className="row"
                              style={{ justifyContent: "center" }}
                            >
                              <div className="col-lg-12 col-sm-12">
                                <div className="d-flex  py-3 align-items-center">
                                  <a
                                    class="navbar-brand"
                                    style={{ width: "15%" }}
                                  >
                                    <img
                                      src="./Images/logo.png"
                                      className="img-fluid"
                                      alt=""
                                      style={{
                                        borderRight: "2px solid darkgrey",
                                      }}
                                    />
                                  </a>
                                  <div class="d-flex justify-content-between">
                                    <div className="me-lg-5 me-0">
                                      <span style={{ color: "#000" }}>
                                        Head Off : A-63, Sector 57, Noida 201301
                                        (UP)
                                      </span>
                                      <br />
                                      <span style={{ color: "#000" }}>
                                        Ph: 0120-4513400 2581217/18 2581119
                                      </span>
                                      <br />
                                      <span style={{ color: "#000" }}>
                                        Fax : 0120-2581215
                                      </span>
                                      <br />
                                      <span style={{ color: "#000" }}>
                                        EMAIL: accounts@pavilionsinteriors.com
                                      </span>
                                      <br />
                                    </div>
                                    <div className="ms-lg-5 ms-0">
                                      <span style={{ color: "#000" }}>
                                        GST No : 09AACCP5781C1ZD
                                      </span>
                                      <br />
                                      <span style={{ color: "#000" }}>
                                        CIN No: U74899DL 1986PTC26155
                                      </span>
                                      <br />
                                      <span style={{ color: "#000" }}>
                                        PAN No. : AACCP5781C
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <h4
                                  className="mt-4 mb-4"
                                  style={{ color: "#464545" }}
                                >
                                  Payment Reciept
                                </h4>

                                <h6 className="mt-3">
                                  Transaction Referance :{" "}
                                  <span
                                    style={{
                                      color: "gray",
                                      textShadow: "1px 1px #a89e9e",
                                      margin: "4px 0",
                                    }}
                                  >
                                    {ShowDownload.brn}
                                  </span>
                                </h6>

                                <h6
                                  className="mt-3"
                                  style={{
                                    color: "gray",
                                    textShadow: "1px 1px #a89e9e",
                                    margin: "4px 0",
                                  }}
                                >
                                  AMOUNT PAID :{" "}
                                  <span>
                                    {ShowDownload.currency}{" "}
                                    {ShowDownload.amountCredited}
                                  </span>
                                </h6>

                                <div className="d-flex mt-4">
                                  <div style={{ marginBottom: "10px" }}>
                                    <h6
                                      style={{
                                        color: "gray",
                                        textShadow: "1px 1px #a89e9e",
                                        margin: "4px 0",
                                      }}
                                    >
                                      Company Unique ID
                                    </h6>
                                    <p style={{ margin: "5px 0" }}>
                                      {ShowDownload.companyUniqueID}
                                    </p>
                                    <p>EMAIL : {ShowDownload.contactEmail}</p>
                                  </div>
                                  <div
                                    style={{ marginBottom: "10px" }}
                                    className="ms-4 mslg-5"
                                  >
                                    <h6
                                      style={{
                                        color: "gray",
                                        textShadow: "1px 1px #a89e9e",
                                        margin: "4px 0",
                                      }}
                                    >
                                      PAID ON
                                    </h6>
                                    <p style={{ margin: "5px 0" }}>
                                      {" "}
                                      {ShowDownload.paymentDate}
                                    </p>
                                  </div>

                                  <div
                                    style={{ marginBottom: "10px" }}
                                    className="ms-4 mslg-5"
                                  >
                                    <h6
                                      style={{
                                        color: "gray",
                                        textShadow: "1px 1px #a89e9e",
                                        margin: "4px 0",
                                      }}
                                    >
                                      PURPOSE
                                    </h6>
                                    <p style={{ margin: "5px 0" }}>
                                      {" "}
                                      {ShowDownload.purpose}
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <button
                                    className="btn btn-danger"
                                    onClick={(e) => generatePDF(e)}
                                  >
                                    Download
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PaymentStatus;
