import React from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Paynow = () => {
  let pdfdata = (
    <div className="content-wrapper">
      <div className="container px-lg-5 px-3" id="pdfdata">
        <div className="d-flex justify-content-between py-3 align-items-center">
          <h3 className="mt-4">PAVILIONS & INTERIORS BANK ACCOUNT DETAILS</h3>
          <button className="btn btn-danger" onClick={(e) => generatePDF(e)}>
            Download
          </button>
        </div>
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
        </table>
      </div>
    </div>
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
      <AdminHeader />
      <Sidebar />
      {pdfdata}
    </div>
  );
};

export default Paynow;
