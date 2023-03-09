import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import {
  GetPowerRequestByid,
  GetAllPowerData,
  GetAudioDetailWithOrderNoAllSP,
  GetPowerRequestDetailWithOrderNoTypeSP,
} from "./Services/BasicAPI";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Footer from "./Footer";
import $ from "jquery";
import { GetEncryptData } from "./Services/PaymentAPI";

const ElectricityView = () => {
  const navigate = useNavigate();
  const [userlog, setUserlog] = useState(localStorage.getItem("user_id"));
  const [allData, setAllData] = useState([]);
  const [DownloadModal, setDownloadModal] = useState([]);
  const [Audiodata, setAudiodata] = useState([]);
  const [orderid, setOrderid] = useState();
  useEffect(() => {
    $("#example").DataTable();
    if (userlog === undefined || userlog === null) {
      navigate("/");
    } else {
      if (localStorage.getItem("user_name") === "Admin") {
        GetAllPowerData().then((res) => {
          setAllData(res.data);
          GetAudioDetailWithOrderNoAllSP("ALL", "ELECTRICITY").then((res) => {
            setAudiodata(res.data);
          });
        });
      } else {
        GetPowerRequestByid(localStorage.getItem("user_id")).then((res) => {
          setAllData(res.data);
          GetAudioDetailWithOrderNoAllSP(
            localStorage.getItem("user_id"),
            "ELECTRICITY"
          ).then((res) => {
            setAudiodata(res.data);
            console.log(res.data);
          });
        });
      }
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      $("#example").DataTable({
        destroy: true,
        dom: "rBftlip",
        buttons: [{}],
        lengthMenu: [
          [10, 20, 50, 100, -1],
          [10, 20, 50, 100, "All"],
        ],
        pageLength: 10,
      });
    }, 1000);
  }, []);

  // ViewDownloadModal;ViewDownloadModal;

  const ViewDownloadModal = (invoice) => {
    setDownloadModal([]);
    setOrderid(invoice);
    GetPowerRequestDetailWithOrderNoTypeSP(invoice).then((res) => {
      setDownloadModal(res.data);
    });
  };

  const initialAmount = 0;
  const TotalAmount = DownloadModal.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    initialAmount
  );

  const initiaGst = 0;
  const Gst = DownloadModal.reduce(
    (previousValue, currentValue) => previousValue + currentValue.tax,
    initiaGst
  );

  const initialGrandTotal = 0;
  const GrandTotal = DownloadModal.reduce(
    (previousValue, currentValue) => previousValue + currentValue.grandTotal,
    initialGrandTotal
  );

  const generatePDF = (e) => {
    e.target.style.display = "none";
    html2canvas(document.querySelector("#pdfdata")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
      pdf.save("download.pdf");
    });
    e.target.style.display = "block";
  };
  const ClickPaynow = (e, invoiceid, mTotal) => {
    e.preventDefault();
    var curr = new Date();
    curr.setDate(curr.getDate());
    const BRN = `${curr.getDate()}${curr.getHours()}${curr.getMinutes()}${curr.getSeconds()}`;
    // var myuserData = `PG_ClientID=defexpo2022|PG_ClientRefID=${BRN}|PG_Amount=${mTotal}|PG_ReturnURL=http://localhost:3000/paymantreciept|
    var myuserData = `${BRN}|${mTotal}|https://orders.pavilionsinteriors.com/#/paymantreciept|${localStorage.getItem(
      "contact_name"
    )}|${localStorage.getItem(
      "user_id"
    )}|${invoiceid}|ELECTRICITY|${localStorage.getItem(
      "user_country"
    )}|${localStorage.getItem("user_email")}|9999999999`;

    GetEncryptData(myuserData).then((res) => {
      window.open(
        `https://payments.pavilionsinteriors.com/TrnReq.aspx?id=${res.enString}`,
        "_blank"
      );
    });
  };
  return (
    <div>
      {" "}
      <Sidebar />
      <AdminHeader />
      <div className="content-wrapper">
        <div className="container px-lg-5 px-0">
          <div className="d-flex justify-content-between  align-items-baseline py-3">
            <h2>Electricity</h2>{" "}
            {localStorage.getItem("user_name") === "Admin" ? (
              <></>
            ) : (
              <Link to="/electricity" className="text-white btn btn-info">
                Add Electricity
              </Link>
            )}
          </div>

          {Audiodata.length === 0 ? (
            "No data found"
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
                          <th>Contact Email</th>
                          <th className="text-end">Country</th>
                          <th className="text-end">Hall No</th>
                          <th className="text-end">stallNo</th>
                          <th>GST No.</th>
                          <th>PAN No.</th>
                        </>
                      ) : (
                        <></>
                      )}
                      <th> Invoice No</th>
                      <th className="text-end">Amount</th>
                      <th scope="col" className="text-end">
                        GST (18%)
                      </th>
                      <th scope="col" className="text-end">
                        Total Amount
                      </th>
                      <th className="text-end">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Audiodata.map((x, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          {localStorage.getItem("user_name") === "Admin" ? (
                            <>
                              {" "}
                              <td>{x.companyUniqueID}</td>
                              <td>{x.companyName}</td>
                              <td className="text-end">{x.contactEmail}</td>
                              <td className="text-end">{x.country}</td>
                              <td className="text-end">{x.hallNo}</td>
                              <td className="text-end">{x.stallNo}</td>
                              <td>{x.gstNo}</td>
                              <td>{x.pan}</td>
                            </>
                          ) : (
                            <></>
                          )}
                          <td>{x.invoiceNo}</td>
                          <td className="text-end">
                            <span>&#8377;</span>
                            {x.totalAmount}
                          </td>
                          <td className="text-end">
                            <span>&#8377;</span>
                            {x.gst}
                          </td>
                          <td className="text-end">
                            <span>&#8377;</span>
                            {x.gTotalAmount}
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
                                ViewDownloadModal(x.invoiceNo, x.gTotalAmount)
                              }
                              style={{
                                padding: "5px 10px",
                                cursor: "pointer",
                                color: "#0a64be",
                              }}
                            ></i>
                            {localStorage.getItem("user_name") === "Admin" ? (
                              <></>
                            ) 
                            : x.ispayment == "N" ? (
                              <button
                                className="btn btn-outline-primary"
                                onClick={(e) =>
                                  ClickPaynow(e, x.invoiceNo, x.gTotalAmount)
                                }
                              >
                                Pay Now
                              </button>
                            ) 
                            : (
                              <></>
                            )}
                          </td>
                        </tr>
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
                        {DownloadModal.length === 0 ? (
                          "No Data Found"
                        ) : (
                          <>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                              <div class="container-fluid">
                                <a
                                  class="navbar-brand"
                                  style={{ width: "15%" }}
                                >
                                  <img
                                    src="./Images/logo.png"
                                    className="img-fluid"
                                    alt=""
                                    style={{
                                      borderRight: "2px solid darkgray",
                                    }}
                                  />
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
                                <div
                                  class="collapse navbar-collapse"
                                  id="navbarNavAltMarkup"
                                >
                                  <div class="navbar-nav navbar-nav-modal d-flex justify-content-between">
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
                              </div>
                            </nav>
                            <div>
                            <div className="table-responsive my-4">
                              <table className="table  text-nowrap">
                                <tbody>
                                <tr>
                                <td>Company Name. : {DownloadModal[0].companyName}</td>
                                <td>Company Unique ID. : {DownloadModal[0].companyUniqueID}</td>
                                <td>Company Country. : {DownloadModal[0].country}</td>
                                </tr>
                                <tr>
                                <td>GST. : {DownloadModal[0].gstNo}</td>
                                <td colSpan="2">PAN. : {DownloadModal[0].pan}</td>
                                
                                </tr>
                                <tr>
                                <td>Hall No. : {DownloadModal[0].hallNo}</td>
                                <td colSpan="2">Stall No. : {DownloadModal[0].stallNo}</td>
                                
                                </tr>
                                </tbody>
                                  </table>
                                  </div>       
                            </div>
                            <h5 className="mb-4">Order No. :{orderid}</h5>
                            <div className="table-responsive my-4">
                              <table className="table  text-nowrap">
                                <thead>
                                  <th>Sr. No.</th>
                                  <th>Power Typer</th>
                                  {/* <th>Specificatione</th> */}
                                  <th className="text-end">Power For</th>
                                  <th className="text-end">From</th>
                                  <th className="text-end">To</th>
                                  <th className="text-end">No. of Days </th>
                                  <th className="text-end">Qty (in KW)</th>
                                  <th className="text-end">Phase</th>
                                  <th>Rates/KW</th>
                                  <th className="text-end">Amount</th>
                                  <th scope="col" className="text-end">
                                    GST (18%)
                                  </th>
                                  <th scope="col" className="text-end">
                                    Total Amount
                                  </th>
                                </thead>
                                <tbody>
                                  {DownloadModal.map((x, i) => {
                                    return (
                                      <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{x.powerType}</td>
                                        {/* <td>{x.specification}</td> */}
                                        <td className="text-end">
                                          {x.powerFor}
                                        </td>

                                        <td className="text-end">{x.form}</td>
                                        <td className="text-end">{x.to}</td>
                                        <td className="text-end">{x.days}</td>
                                        <td className="text-end">{x.qty}</td>
                                        <td className="text-end">{x.phase}</td>
                                        <td>{x.unit}</td>
                                        <td className="text-end">
                                          <span>&#8377;</span>
                                          {x.amount}
                                        </td>
                                        <td className="text-end">
                                          <span>&#8377;</span>
                                          {x.tax}
                                        </td>
                                        <td className="text-end">
                                          <span>&#8377;</span>
                                          {x.grandTotal}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                              <div className="d-flex justify-content-end">
                                <table
                                  className="table w-25"
                                  style={{ boxShadow: "none" }}
                                >
                                  <thead>
                                    <tr>
                                      <th>Total</th>
                                      <th style={{ textAlign: "right" }}>
                                        <span>&#8377;</span>
                                        {Math.round(TotalAmount).toFixed(0)}
                                      </th>
                                    </tr>
                                    <tr>
                                      <th>GST (18%)</th>
                                      <th style={{ textAlign: "right" }}>
                                        &#8377;
                                        {Math.round(Gst.toFixed(0))}
                                      </th>
                                    </tr>
                                    <tr>
                                      <th>Grand Total</th>
                                      <th style={{ textAlign: "right" }}>
                                        &#8377;
                                        {Math.round(GrandTotal).toFixed(0)}
                                      </th>
                                    </tr>
                                  </thead>
                                </table>
                              </div>
                              <div className="table-responsive my-4">
                                <h3 className="mt-4">
                                  PAVILIONS & INTERIORS BANK ACCOUNT DETAILS
                                </h3>
                                <table className="details-table table">
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Particulars</th>
                                      <th>Details</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>
                                        Name and address of the Beneficiary.
                                      </td>
                                      <td>
                                        PAVILIONS AND INTERIORS (i) PVT.LTD.,
                                        <br />
                                        A-63 SECTOR - 57,NOIDA - 201310
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Account number of Beneficiary</td>
                                      <td>13405600002949</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Account type (CA/CC/SB)</td>
                                      <td>OVER DRAFT CASH CREDIT (ODCC)</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>
                                        Name & Address of the Bank Branch (where
                                        payments are to be sent by PCRA)
                                      </td>
                                      <td>
                                        THE FEDERAL BANK LTD <br />
                                        FEDERAL TOWER, H-362, SHOPPING COMPLEX,{" "}
                                        <br />
                                        SECTOR-22, NOIDA – 201301 <br /> 0120
                                        241 1255 nda@federalbank.co.in
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>Branch Name</td>
                                      <td>THE FEDERAL BANK LIMITED</td>
                                    </tr>

                                    <tr>
                                      <td>6</td>
                                      <td>
                                        The 09 Digit MICR code of the Branch
                                      </td>
                                      <td>110049006</td>
                                    </tr>

                                    <tr>
                                      <td>7</td>
                                      <td>IFSC/RTGS Code of the bank Branch</td>
                                      <td>FDRL0001340</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={(e) => generatePDF(e)}
                        >
                          Download
                        </button>
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
  );
};

export default ElectricityView;
