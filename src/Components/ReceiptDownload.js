import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { GetPowerRequestByid } from "./Services/BasicAPI";
import { Link, useNavigate } from "react-router-dom";
const ReceiptDownload = () => {
  const navigate = useNavigate();
  const [userlog, setUserlog] = useState(localStorage.getItem("user_id"));
  const [allData, setAllData] = useState([]);
  const [tempdt, setTempdt] = useState([]);
  useEffect(() => {
    if (userlog === undefined || userlog === null) {
      navigate("/");
    } else {
      GetPowerRequestByid(localStorage.getItem("user_id")).then((res) => {
        setAllData(res.data);
      });
    }
  }, []);

  let pdfdata = (
    <>
      <div className="content-wrapper">
        <div className="container px-lg-5 px-3" id="pdfdata">
          <div className="d-flex justify-content-end py-3 align-items-center">
            {/* <img
              src="./Images/Logo.png"
              alt="Logo"
              className="img-fluid"
              style={{ width: "15%" }}
            /> */}
            <button className="btn btn-danger" onClick={(e) => generatePDF(e)}>
              Download
            </button>{" "}
          </div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" style={{ width: "15%" }}>
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
                <div class="navbar-nav" style={{ marginLeft: "auto" }}>
                  <span
                    class="nav-link active"
                    style={{ color: "#000" }}
                    aria-current="page"
                  >
                    <b>EMAIL: </b>
                    defexpo@pavilionsinteriors.com
                  </span>
                  <span class="nav-link active" style={{ color: "#000" }}>
                    <b>PHONE: </b>
                    +91 120 4513400-01
                  </span>
                </div>
              </div>
            </div>
          </nav>
          <hr style={{ marginTop: "0rem", marginBottom: "3rem" }} />
          <span style={{ color: "#000", marginTop: "1rem" }}>
            <b>Order id: 1</b>
          </span>
          <table className="table  text-nowrap mt-2">
            <thead>
              <th>Sr. No.</th>
              <th scope="col">Power Type</th>
              <th scope="col">Power For</th>
              <th scope="col" className="text-end">
                No. of Days
              </th>
              <th scope="col" className="text-end">
                Qty (in KW)
              </th>
              <th scope="col" className="text-end">
                Phase
              </th>
              <th scope="col" className="text-end">
                Rates/KW
              </th>
              <th scope="col" className="text-end">
                Amounts
              </th>
              <th scope="col" className="text-end">
                GST (18%)
              </th>
              <th scope="col" className="text-end">
                Total Amount
              </th>
            </thead>
            <tbody>
              {tempdt.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{x.powerType}</td>
                    <td>{x.powerFor}</td>
                    <td className="text-end">{x.days}</td>
                    <td className="text-end">{x.qty}</td>
                    <td className="text-end">{x.phase}</td>
                    <td className="text-end">
                      {localStorage.getItem("user_country") === "India" ? (
                        <span>&#8377;</span>
                      ) : (
                        `$`
                      )}
                      {x.unit}
                    </td>
                    <td className="text-end">
                      {localStorage.getItem("user_country") === "India" ? (
                        <span>&#8377;</span>
                      ) : (
                        `$`
                      )}
                      {x.amount}
                    </td>
                    <td className="text-end">
                      {localStorage.getItem("user_country") === "India" ? (
                        <span>&#8377;</span>
                      ) : (
                        `$`
                      )}
                      {x.tax}
                    </td>
                    <td className="text-end">
                      {localStorage.getItem("user_country") === "India" ? (
                        <span>&#8377;</span>
                      ) : (
                        `$`
                      )}
                      {x.grandTotal}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={7}></td>
                <td colSpan="3">
                  <table className="table  text-nowrap">
                    <thead>
                      <tr>
                        <th>Total</th>
                        <th style={{ textAlign: "right" }}>
                          {localStorage.getItem("user_country") === "India" ? (
                            <span>&#8377;</span>
                          ) : (
                            `$`
                          )}
                          {tempdt.reduce((a, b) => +a + +b.grandTotal, 0)}
                        </th>
                      </tr>
                      <tr>
                        <th>GST (18%)</th>
                        <th style={{ textAlign: "right" }}>
                          {localStorage.getItem("user_country") === "India" ? (
                            <span>&#8377;</span>
                          ) : (
                            `$`
                          )}
                          {(tempdt.reduce((a, b) => +a + +b.grandTotal, 0) *
                            18) /
                            100}
                        </th>
                      </tr>
                      <tr>
                        <th>Grand Total</th>
                        <th style={{ textAlign: "right" }}>
                          {localStorage.getItem("user_country") === "India" ? (
                            <span>&#8377;</span>
                          ) : (
                            `$`
                          )}
                          {(
                            tempdt.reduce((a, b) => +a + +b.grandTotal, 0) *
                            1.18
                          ).toFixed(2)}
                        </th>
                      </tr>
                    </thead>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <h3
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            PAVILIONS & INTERIORS BANK ACCOUNT DETAILS
          </h3>
          <table className="table  text-nowrap" style={{ marginTop: "0.5rem" }}>
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
                <td>Name and address of the Beneficiary.</td>
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
                  Name & Address of the Bank Branch (where payments are to be
                  sent by PCRA)
                </td>
                <td>
                  THE FEDERAL BANK LTD <br />
                  FEDERAL TOWER, H-362, SHOPPING COMPLEX, <br />
                  SECTOR-22, NOIDA – 201301 <br /> 0120 241 1255
                  nda@federalbank.co.in
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Branch Name</td>
                <td>THE FEDERAL BANK LIMITED</td>
              </tr>

              <tr>
                <td>6</td>
                <td>The 09 Digit MICR code of the Branch</td>
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

  return (
    <div>
      {" "}
      {/* <AdminHeader /> */}
      <Sidebar />
      {pdfdata}
    </div>
  );
};

export default ReceiptDownload;
