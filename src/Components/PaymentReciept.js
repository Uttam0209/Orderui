import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate, useLocation } from "react-router-dom";
import {GetDeEncryptData} from './Services/PaymentAPI'
const generatePDF = (e) => {
  e.target.style.display = "none";
  html2canvas(document.querySelector("#pdfdata")).then((canvas) => {
    document.body.appendChild(canvas); // if you want see your screenshot in body.
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4", false);
    pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
    pdf.save("Payment Reciept.pdf");
  });
  e.target.style.display = "block";
};

const PaymentReciept = () => {
  const [respData,setResData]=useState({});
  const locate = useLocation();
  let EncPram = "";
  useEffect(() => {
   
    EncPram = locate.search.slice(9, locate.search.length);
    //EncPram = locate;
    GetDeEncryptData(EncPram).then((res)=>{setResData(res);})


  }, []);
  return (
    <div className="content-wrapper">
      <div className="container px-lg-5 px-3" id="pdfdata">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg-10 col-sm-12">
            <div className="d-flex  py-3 align-items-center">
              <a class="navbar-brand" style={{ width: "15%" }}>
                <img
                  src="./Images/logo.png"
                  className="img-fluid"
                  alt=""
                  style={{ borderRight: "2px solid darkgrey" }}
                />
              </a>
              <div class="d-flex justify-content-between">
                <div className="me-lg-5 me-0">
                  <span style={{ color: "#000" }}>
                    Head Off : A-63, Sector 57, Noida 201301 (UP)
                  </span>
                  <br />
                  <span style={{ color: "#000" }}>
                    Ph: 0120-4513400 2581217/18 2581119
                  </span>
                  <br />
                  <span style={{ color: "#000" }}>Fax : 0120-2581215</span>
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
                  <span style={{ color: "#000" }}>PAN No. : AACCP5781C</span>
                </div>
              </div>
            </div>

            <h4 className="mt-4 mb-4" style={{ color: "#464545" }}>
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
                {respData.brn}
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
              AMOUNT PAID : <span>{respData.currency}  {respData.amountCredited}</span>
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
                  Company Unique ID)
                </h6>
                <p style={{ margin: "5px 0" }}>
                {respData.companyUniqueID} 
                </p>
                <p>EMAIL : {localStorage.getItem("user_email")}</p>
              </div>
              <div style={{ marginBottom: "10px" }} className="ms-4 mslg-5">
                <h6
                  style={{
                    color: "gray",
                    textShadow: "1px 1px #a89e9e",
                    margin: "4px 0",
                  }}
                >
                  PAID ON
                </h6>
                <p style={{ margin: "5px 0" }}> {respData.paymentDate}</p>
              </div>
              
              <div style={{ marginBottom: "10px" }} className="ms-4 mslg-5">
                <h6
                  style={{
                    color: "gray",
                    textShadow: "1px 1px #a89e9e",
                    margin: "4px 0",
                  }}
                >
                  Payment Status
                </h6>
                <p style={{ margin: "5px 0" }}> {respData.pgStatus}</p>
              </div>
              <div style={{ marginBottom: "10px" }} className="ms-4 mslg-5">
                <h6
                  style={{
                    color: "gray",
                    textShadow: "1px 1px #a89e9e",
                    margin: "4px 0",
                  }}
                >
                  Receipt Number
                </h6>
                <p style={{ margin: "5px 0" }}> {respData.recieptNo}</p>
              </div>
              <div style={{ marginBottom: "10px" }} className="ms-4 mslg-5">
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
                  {respData.purpose}
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
            {/* <div className="table-responsive my-4">
              <table className="table  text-nowrap" id="example">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>CompanyID</th>
                    <th>Company Name</th>
                    <th>Contact Email</th>
                    <th className="text-end">Country</th>
                    <th className="text-end">Hall No</th>
                    <th className="text-end">stallNo</th>

                    <th> Invoice No</th>
                    <th className="text-end">Amount</th>
                    <th scope="col" className="text-end">
                      GST (18%)
                    </th>
                    <th scope="col" className="text-end">
                      Total Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>

                    <td></td>
                    <td></td>
                    <td className="text-end"></td>
                    <td className="text-end"></td>
                    <td className="text-end"></td>
                    <td className="text-end"></td>

                    <td></td>
                    <td className="text-end"></td>
                    <td className="text-end"></td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex justify-content-end">
                <table className="table w-25" style={{ boxShadow: "none" }}>
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th style={{ textAlign: "right" }}></th>
                    </tr>
                    <tr>
                      <th>GST (18%)</th>
                      <th style={{ textAlign: "right" }}>&#8377;</th>
                    </tr>
                    <tr>
                      <th>Grand Total</th>
                      <th style={{ textAlign: "right" }}>&#8377;</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div> */}

            {/* <table className="details-table table">
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
                Name & Address of the Bank Branch (where payments are to be sent
                by PCRA)
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
        </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReciept;
