import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import {
  GetRatelist,
  SaveTelephone,
  GetTelephoneDetailsWithOrderNo,
} from "./Services/BasicAPI";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Closed from './Closed'
const TelephoneInternet = () => {
  // const navigate = useNavigate();
  // const [userlog, setUserlog] = useState(localStorage.getItem("user_id"));
  // const [counter, setCounter] = useState(0);
  // const [duration, setDuration] = useState("");
  // var curr = new Date();
  // curr.setDate(curr.getDate());
  // var todaydate = curr.toISOString().substr(0, 10);
  // const [data, setData] = useState({
  //   companyUniqueID: localStorage.getItem("user_id"),
  //   unitCost: 0,
  //   qty: 0,
  //   days: 0,
  //   currency: localStorage.getItem("user_country") === "India" ? "INR" : "USD",
  //   totalAmount: 0,
  //   gst: 0,
  //   gTotalAmount: 0,
  //   connectionCategory: "",
  //   invoiceGen: "N",
  //   invoiceNo: "N",
  //   isActive: "Y",
  //   recTime: todaydate,
  // });
  // const [allData, setAlldata] = useState([]);
  // const [tempdt, setTempdt] = useState([]);
  // const [counter1, setCounter1] = useState(0);
  // useEffect(() => {
  //   if (userlog === undefined || userlog === null) {
  //     navigate("/");
  //   } else {
  //     GetRatelist("INTERNET").then((res) => {
  //       setAlldata(res.data);
  //     });
  //   }
  // }, []);
  // const [orderid, setOrderid] = useState("");
  // const onClickPieces2 = (e) => {
  //   console.log("click2");
  //   if (e.target.id === "inc1") {
  //     setCounter1(counter1 + 1);
  //     setData({
  //       ...data,
  //       qty: data.qty,
  //       days: counter1 + 1,
  //       totalAmount:
  //         duration === "Entire Event"
  //           ? data.qty * data.unitCost
  //           : data.qty * data.unitCost * (counter1 + 1),
  //       gst:
  //         duration === "Entire Event"
  //           ? data.qty * data.unitCost * 0.18
  //           : data.qty * data.unitCost * (counter1 + 1) * 0.18,
  //       gTotalAmount:
  //         duration === "Entire Event"
  //           ? data.qty * data.unitCost * 1.18
  //           : data.qty * data.unitCost * (counter1 + 1) * 1.18,
  //     });
  //   } else if (e.target.id === "dec1" && data.days != 0) {
  //     setCounter1(counter1 - 1);
  //     setData({
  //       ...data,
  //       qty: data.qty,
  //       days: counter1 - 1,
  //       totalAmount:
  //         duration === "Entire Event"
  //           ? data.qty * data.unitCost
  //           : data.qty * data.unitCost * (counter1 - 1),
  //       gst:
  //         duration === "Entire Event"
  //           ? data.qty * data.unitCost * 0.18
  //           : data.qty * data.unitCost * (counter1 - 1) * 0.18,
  //       gTotalAmount:
  //         duration === "Entire Event"
  //           ? data.qty * data.unitCost * 1.18
  //           : data.qty * data.unitCost * (counter1 - 1) * 1.18,
  //     });
  //   }
  // };

  // const onClickPieces = (e) => {
  //   console.log("click");
  //   if (e.target.id === "inc") {
  //     setCounter(counter + 1);
  //     setData({
  //       ...data,
  //       qty: counter + 1,
  //       totalAmount:
  //         duration === "Entire Event"
  //           ? (counter + 1) * data.unitCost
  //           : (counter + 1) * data.unitCost * data.days,
  //       gst:
  //         duration === "Entire Event"
  //           ? (counter + 1) * data.unitCost * 0.18
  //           : (counter + 1) * data.unitCost * data.days * 0.18,
  //       gTotalAmount:
  //         duration === "Entire Event"
  //           ? (counter + 1) * data.unitCost * 1.18
  //           : (counter + 1) * data.unitCost * data.days * 1.18,
  //     });
  //   } else if (e.target.id === "dec" && counter != 0) {
  //     setCounter(counter - 1);
  //     setData({
  //       ...data,
  //       qty: counter - 1,
  //       totalAmount:
  //         duration === "Entire Event"
  //           ? (counter - 1) * data.unitCost
  //           : (counter - 1) * data.unitCost * data.days,
  //       gst:
  //         duration === "Entire Event"
  //           ? (counter - 1) * data.unitCost * 0.18
  //           : (counter - 1) * data.unitCost * data.days * 0.18,
  //       gTotalAmount:
  //         duration === "Entire Event"
  //           ? (counter - 1) * data.unitCost * 1.18
  //           : (counter - 1) * data.unitCost * data.days * 1.18,
  //     });
  //   }
  // };

  // // handle click event of the Remove button
  // const handleRemoveClick = (index) => {
  //   const list = [...tempdt];
  //   list.splice(index, 1);
  //   setTempdt(list);
  // };

  // // handle click event of the Add button
  // const handleAddClick = (e) => {
  //   if (data.qty === 0 || data.connectionCategory === "" || data.days === 0)
  //     toast.warn("Please enter the quantity and Connection type");
  //   else {
  //     setTempdt([...tempdt, data]);
  //     setData({
  //       ...data,
  //       qty: 0,
  //       totalAmount: 0,
  //       connectionCategory: "",
  //       gst: 0,
  //       gTotalAmount: 0,
  //     });
  //     setCounter(0);
  //   }
  // };
  // const selectedChange = (e) => {
  //   const newdata = allData.filter((val) => {
  //     return val.description.toString() === e.target.value;
  //   });
  //   setData({
  //     ...data,
  //     connectionCategory: newdata[0].description,
  //     unitCost:
  //       data.currency === "INR" ? newdata[0].rateINR : newdata[0].rateUSD,
  //     days: newdata[0].days,
  //   });
  //   setDuration(newdata[0].durtaion);
  // };
  // const SaveData = () => {
  //   const Oid = `TEL/${localStorage.getItem(
  //     "user_id"
  //   )}/${curr.getDate()}${curr.getHours()}${curr.getMinutes()}${curr.getSeconds()}`;
  //   setOrderid(Oid);
  //   const list = [...tempdt];
  //   list.map((val) => {
  //     val.invoiceNo = Oid;
  //   });
  //   setTempdt(list);
  //   tempdt.map((val) => {
  //     SaveTelephone(val).then((res) => {
  //       console.log(res);
  //     });
  //   });
  //   document.getElementById("messagepop").click();
  // };
  // const generatePDF = (e) => {
  //   e.target.style.display = "none";
  //   html2canvas(document.querySelector("#pdfdata")).then((canvas) => {
  //     document.body.appendChild(canvas); // if you want see your screenshot in body.
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "pt", "a4", false);
  //     pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
  //     pdf.save(`${orderid}.pdf`);
  //   });
  //   e.target.style.display = "block";
  // };

  // const SndOrderNo = () => {
  //   GetTelephoneDetailsWithOrderNo(orderid).then((res) => {
  //     console.log("orderid", orderid);
  //     console.log("res", res);
  //   });
  // };

  return (
    <>
      <AdminHeader />
      <Sidebar />
      <div className="content-wrapper">
        <div className="container px-lg-5 px-3">
          <div className="justify-content-between  align-items-baseline d-flex py-3">
            <h2>Telephone / Internet</h2>
            <Link to="/telephoneview" className="text-white btn btn-info">
              View Telephone/Internet
            </Link>
          </div>
          <Closed/>
          </div>
          </div>
          </>
    //       <div className="row">
    //         <div className="col-md-4 col-sm-12">
    //           <div class="card mb-3 ">
    //             <div class="row g-0">
    //               <div class="col-md-12">
    //                 <div class="card-body">
    //                   <p className="card-text">
    //                     <span>Connection Type :</span>
    //                     <select
    //                       class="form-select"
    //                       value={data.connectionCategory}
    //                       aria-label="select example"
    //                       onChange={selectedChange}
    //                     >
    //                       <option selected hidden>
    //                         select
    //                       </option>
    //                       {allData.length === 0 ? (
    //                         <option>No Data Found</option>
    //                       ) : (
    //                         allData.map((val, i) => {
    //                           return (
    //                             <option key={i} value={val.description}>
    //                               {val.description}
    //                             </option>
    //                           );
    //                         })
    //                       )}
    //                     </select>
    //                   </p>{" "}
    //                   {data.connectionCategory !== "" ? (
    //                     <>
    //                       <p className="card-text">
    //                         <span>
    //                           Unit Cost in {data.currency} :{data.unitCost}
    //                         </span>
    //                       </p>
    //                       <p className="card-text">
    //                         <span>Qty :</span>
    //                         <div className="input-group mb-3">
    //                           <span
    //                             className="input-group-text btn btn-outline-secondary"
    //                             onClick={onClickPieces}
    //                             id="dec"
    //                           >
    //                             -
    //                           </span>
    //                           <input
    //                             type="text"
    //                             className="form-control"
    //                             placeholder="Quantity"
    //                             aria-label="qty"
    //                             name="qty"
    //                             value={data.qty}
    //                             readOnly="true"
    //                           />

    //                           <span
    //                             className="input-group-text btn btn-outline-secondary"
    //                             onClick={onClickPieces}
    //                             id="inc"
    //                           >
    //                             +
    //                           </span>
    //                         </div>
    //                       </p>{" "}
    //                       <p className="card-text">
    //                         <span>Days :</span>
    //                         <div className="input-group mb-3">
    //                           {duration === "Entire Event" ? (
    //                             <></>
    //                           ) : (
    //                             <span
    //                               className="input-group-text btn btn-outline-secondary"
    //                               onClick={onClickPieces2}
    //                               id="dec1"
    //                             >
    //                               -
    //                             </span>
    //                           )}

    //                           <input
    //                             type="text"
    //                             className="form-control"
    //                             placeholder="days"
    //                             aria-label="days"
    //                             name="days"
    //                             value={data.days}
    //                             readOnly
    //                             onChange={(e) => {
    //                               setData({
    //                                 ...data,
    //                                 days: e.target.value,
    //                                 totalAmount:
    //                                   duration === "Entire Event"
    //                                     ? counter * data.unitCost
    //                                     : counter *
    //                                       data.unitCost *
    //                                       e.target.value,
    //                               });
    //                             }}
    //                           />
    //                           {duration === "Entire Event" ? (
    //                             <></>
    //                           ) : (
    //                             <span
    //                               className="input-group-text btn btn-outline-secondary"
    //                               onClick={onClickPieces2}
    //                               id="inc1"
    //                             >
    //                               +
    //                             </span>
    //                           )}
    //                         </div>
    //                       </p>
    //                       <p className="card-text">
    //                         <b>
    //                           Total Amount Payable in :{" "}
    //                           {localStorage.getItem("user_country") ===
    //                           "India" ? (
    //                             <span>&#8377;</span>
    //                           ) : (
    //                             `$`
    //                           )}
    //                           {data.totalAmount}
    //                         </b>
    //                       </p>
    //                       <p class="card-text">
    //                         <button
    //                           className="btn btn-danger"
    //                           onClick={handleAddClick}
    //                         >
    //                           Add
    //                         </button>
    //                       </p>
    //                     </>
    //                   ) : (
    //                     <></>
    //                   )}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         {tempdt.length === 0 ? (
    //           ""
    //         ) : (
    //           <>
    //             <div className="col-md-8 col-sm-12">
    //               <div className="table-responsive">
    //                 <table className="table  text-nowrap">
    //                   <thead>
    //                     <th>Sr. No.</th>
    //                     <th>Connection category</th>
    //                     <th scope="col" className="text-end">
    //                       No. of Days
    //                     </th>
    //                     <th className="text-end">Unit Cost</th>

    //                     <th className="text-end">Qty</th>
    //                     <th className="text-end">Total</th>
    //                     <th scope="col" className="text-end">
    //                       GST (18%)
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Total Amount
    //                     </th>
    //                   </thead>
    //                   <tbody>
    //                     {tempdt.map((x, i) => {
    //                       return (
    //                         <tr>
    //                           <td>{i + 1}</td>
    //                           <td>{x.connectionCategory}</td>
    //                           <td className="text-end">{x.days}</td>
    //                           <td className="text-end">
    //                             {" "}
    //                             {localStorage.getItem("user_country") ===
    //                             "India" ? (
    //                               <span>&#8377;</span>
    //                             ) : (
    //                               `$`
    //                             )}
    //                             {x.unitCost}
    //                           </td>
    //                           <td className="text-end">{x.qty}</td>
    //                           <td className="text-end">
    //                             {" "}
    //                             {localStorage.getItem("user_country") ===
    //                             "India" ? (
    //                               <span>&#8377;</span>
    //                             ) : (
    //                               `$`
    //                             )}
    //                             {x.totalAmount}
    //                           </td>
    //                           <td className="text-end">
    //                             {localStorage.getItem("user_country") ===
    //                             "India" ? (
    //                               <span>&#8377;</span>
    //                             ) : (
    //                               `$`
    //                             )}
    //                             {Math.round(x.gst).toFixed(0)}
    //                           </td>
    //                           <td className="text-end">
    //                             {localStorage.getItem("user_country") ===
    //                             "India" ? (
    //                               <span>&#8377;</span>
    //                             ) : (
    //                               `$`
    //                             )}
    //                             {Math.round(x.gTotalAmount).toFixed(0)}
    //                           </td>

    //                           <td>
    //                             <span
    //                               className="fas fa-times-circle btn text-danger ml-2 p-0 p-lg-auto"
    //                               onClick={() => handleRemoveClick(i)}
    //                             ></span>
    //                           </td>
    //                         </tr>
    //                       );
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //               <div className="d-flex justify-content-end">
    //                 <table
    //                   className="table w-50 w-lg-50"
    //                   style={{ boxShadow: "none" }}
    //                 >
    //                   <thead>
    //                     <tr>
    //                       <th>Total</th>
    //                       <th style={{ textAlign: "right" }}>
    //                         {localStorage.getItem("user_country") ===
    //                         "India" ? (
    //                           <span>&#8377;</span>
    //                         ) : (
    //                           `$`
    //                         )}
    //                         {tempdt.reduce((a, b) => +a + +b.totalAmount, 0)}
    //                       </th>
    //                     </tr>
    //                     <tr>
    //                       <th>GST (18%)</th>
    //                       <th style={{ textAlign: "right" }}>
    //                         {localStorage.getItem("user_country") ===
    //                         "India" ? (
    //                           <span>&#8377;</span>
    //                         ) : (
    //                           `$`
    //                         )}
    //                         {Math.round(
    //                           (tempdt.reduce((a, b) => +a + +b.totalAmount, 0) *
    //                             18) /
    //                             100
    //                         ).toFixed(0)}
    //                       </th>
    //                     </tr>
    //                     <tr>
    //                       <th>Grand Total</th>
    //                       <th style={{ textAlign: "right" }}>
    //                         {localStorage.getItem("user_country") ===
    //                         "India" ? (
    //                           <span>&#8377;</span>
    //                         ) : (
    //                           `$`
    //                         )}
    //                         {Math.round(
    //                           tempdt.reduce((a, b) => +a + +b.totalAmount, 0) *
    //                             1.18
    //                         ).toFixed(0)}
    //                       </th>
    //                     </tr>
    //                   </thead>
    //                 </table>
    //               </div>
    //               <button
    //                 className="btn btn-success float-right mr-2 mt-3"
    //                 onClick={SaveData}
    //               >
    //                 Save & Submit
    //               </button>
    //             </div>
    //           </>
    //         )}
    //       </div>
    //       <div></div>
    //     </div>
    //   </div>{" "}
    //   <div
    //     class="modal fade"
    //     id="exampleModalToggle"
    //     aria-hidden="true"
    //     data-bs-backdrop="static"
    //     aria-labelledby="exampleModalToggleLabel"
    //     tabindex="-1"
    //   >
    //     <div class="modal-dialog  modal-dialog-centered">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h2 class="modal-title" id="exampleModalToggleLabel">
    //             Confirmation
    //           </h2>
    //         </div>
    //         <div class="modal-body">
    //           Your order has been submitted successfully
    //         </div>
    //         <div class="modal-footer">
    //           <button
    //             class="btn btn-primary"
    //             data-bs-target="#exampleModalToggle2"
    //             data-bs-toggle="modal"
    //             data-bs-dismiss="modal"
    //             onClick={SndOrderNo}
    //           >
    //             View receipt & Proceed
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     class="modal fade"
    //     id="exampleModalToggle2"
    //     aria-hidden="true"
    //     aria-labelledby="exampleModalToggleLabel2"
    //     tabindex="-1"
    //   >
    //     <div class="modal-dialog modal-dialog-centered modal-xl">
    //       <div class="modal-content" id="pdfdata">
    //         <div class="modal-header">
    //           <h2 class="modal-title" id="exampleModalToggleLabel2">
    //             Receipt
    //           </h2>
    //         </div>
    //         <div class="modal-body">
    //           <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //             <div class="container-fluid">
    //               <a class="navbar-brand" style={{ width: "15%" }}>
    //                 <img
    //                   src="./Images/logo.png"
    //                   className="img-fluid"
    //                   alt=""
    //                   style={{ borderRight: "2px solid darkgray" }}
    //                 />
    //               </a>
    //               <button
    //                 class="navbar-toggler"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#navbarNavAltMarkup"
    //                 aria-controls="navbarNavAltMarkup"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation"
    //               >
    //                 <span class="navbar-toggler-icon"></span>
    //               </button>
    //               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //                 <div class="navbar-nav navbar-nav-modal d-flex justify-content-between">
    //                   <div className="me-lg-5 me-0">
    //                     <span style={{ color: "#000" }}>
    //                       Head Off : A-63, Sector 57, Noida 201301 (UP)
    //                     </span>
    //                     <br />
    //                     <span style={{ color: "#000" }}>
    //                       Ph: 0120-4513400 2581217/18 2581119
    //                     </span>
    //                     <br />
    //                     <span style={{ color: "#000" }}>
    //                       Fax : 0120-2581215
    //                     </span>
    //                     <br />
    //                     <span style={{ color: "#000" }}>
    //                       EMAIL: accounts@pavlionsunteriors.com
    //                     </span>
    //                     <br />
    //                   </div>
    //                   <div className="ms-lg-5 ms-0">
    //                     <span style={{ color: "#000" }}>
    //                       GST No : 09AACCP5781C1ZD
    //                     </span>
    //                     <br />
    //                     <span style={{ color: "#000" }}>
    //                       CIN No: U74899DL 1986PTC26155
    //                     </span>
    //                     <br />
    //                     <span style={{ color: "#000" }}>
    //                       PAN No. : AACCP5781C
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </nav>
    //           <hr style={{ marginTop: "0rem", marginBottom: "3rem" }} />
    //           <div className="col-md-12 col-sm-12">
    //             <h3 className="mb-4">Order No. : {orderid}</h3>
    //             <div className="table-responsive">
    //               <table className="table shadow text-nowrap">
    //                 <thead>
    //                   <th>Sr. No.</th>
    //                   <th>Connection category</th>
    //                   <th scope="col" className="text-end">
    //                     No. of Days
    //                   </th>
    //                   <th className="text-end">Unit Cost</th>
    //                   <th className="text-end">Qty</th>
    //                   <th className="text-end">Total</th>
    //                   <th scope="col" className="text-end">
    //                     GST (18%)
    //                   </th>
    //                   <th scope="col" className="text-end">
    //                     Total Amount
    //                   </th>
    //                 </thead>
    //                 <tbody>
    //                   {tempdt.map((x, i) => {
    //                     return (
    //                       <tr key={i}>
    //                         <td>{i + 1}</td>
    //                         <td>{x.connectionCategory}</td>
    //                         <td className="text-end">{x.days}</td>
    //                         <td className="text-end">
    //                           {" "}
    //                           {localStorage.getItem("user_country") ===
    //                           "India" ? (
    //                             <span>&#8377;</span>
    //                           ) : (
    //                             `$`
    //                           )}
    //                           {x.unitCost}
    //                         </td>
    //                         <td className="text-end">{x.qty}</td>
    //                         <td className="text-end">
    //                           {" "}
    //                           {localStorage.getItem("user_country") ===
    //                           "India" ? (
    //                             <span>&#8377;</span>
    //                           ) : (
    //                             `$`
    //                           )}
    //                           {x.totalAmount}
    //                         </td>

    //                         <td className="text-end">
    //                           {localStorage.getItem("user_country") ===
    //                           "India" ? (
    //                             <span>&#8377;</span>
    //                           ) : (
    //                             `$`
    //                           )}
    //                           {Math.round(x.gst).toFixed(0)}
    //                         </td>
    //                         <td className="text-end">
    //                           {localStorage.getItem("user_country") ===
    //                           "India" ? (
    //                             <span>&#8377;</span>
    //                           ) : (
    //                             `$`
    //                           )}
    //                           {Math.round(x.gTotalAmount).toFixed(0)}
    //                         </td>
    //                       </tr>
    //                     );
    //                   })}
    //                   <tr>
    //                     <td colSpan={6}></td>
    //                     <td colSpan="3">
    //                       <table className="table">
    //                         <thead>
    //                           <tr>
    //                             <th>Total</th>
    //                             <th style={{ textAlign: "right" }}>
    //                               {localStorage.getItem("user_country") ===
    //                               "India" ? (
    //                                 <span>&#8377;</span>
    //                               ) : (
    //                                 `$`
    //                               )}
    //                               {tempdt.reduce(
    //                                 (a, b) => +a + +b.totalAmount,
    //                                 0
    //                               )}
    //                             </th>
    //                           </tr>
    //                           <tr>
    //                             <th>GST (18%)</th>
    //                             <th style={{ textAlign: "right" }}>
    //                               {localStorage.getItem("user_country") ===
    //                               "India" ? (
    //                                 <span>&#8377;</span>
    //                               ) : (
    //                                 `$`
    //                               )}
    //                               {Math.round(
    //                                 (tempdt.reduce(
    //                                   (a, b) => +a + +b.totalAmount,
    //                                   0
    //                                 ) *
    //                                   18) /
    //                                   100
    //                               ).toFixed(0)}
    //                             </th>
    //                           </tr>
    //                           <tr>
    //                             <th>Grand Total</th>
    //                             <th style={{ textAlign: "right" }}>
    //                               {localStorage.getItem("user_country") ===
    //                               "India" ? (
    //                                 <span>&#8377;</span>
    //                               ) : (
    //                                 `$`
    //                               )}
    //                               {Math.round(
    //                                 tempdt.reduce(
    //                                   (a, b) => +a + +b.totalAmount,
    //                                   0
    //                                 ) * 1.18
    //                               ).toFixed(0)}
    //                             </th>
    //                           </tr>
    //                         </thead>
    //                       </table>
    //                     </td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //             <h3
    //               style={{
    //                 textAlign: "center",
    //                 marginTop: "1.5rem",
    //                 marginBottom: "1.5rem",
    //               }}
    //             >
    //               PAVILIONS & INTERIORS BANK ACCOUNT DETAILS
    //             </h3>
    //             <div className="table-responsive">
    //               <table
    //                 className="table  text-nowrap"
    //                 style={{ marginTop: "0.5rem" }}
    //               >
    //                 <thead>
    //                   <tr>
    //                     <th>S.No.</th>
    //                     <th>Particulars</th>
    //                     <th>Details</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>1</td>
    //                     <td>Name and address of the Beneficiary.</td>
    //                     <td>
    //                       PAVILIONS AND INTERIORS (i) PVT.LTD.,
    //                       <br />
    //                       A-63 SECTOR - 57,NOIDA - 201310
    //                     </td>
    //                   </tr>
    //                   <tr>
    //                     <td>2</td>
    //                     <td>Account number of Beneficiary</td>
    //                     <td>13405600002949</td>
    //                   </tr>
    //                   <tr>
    //                     <td>3</td>
    //                     <td>Account type (CA/CC/SB)</td>
    //                     <td>OVER DRAFT CASH CREDIT (ODCC)</td>
    //                   </tr>
    //                   <tr>
    //                     <td>4</td>
    //                     <td>
    //                       Name & Address of the Bank Branch (where payments are
    //                       to be sent by PCRA)
    //                     </td>
    //                     <td>
    //                       THE FEDERAL BANK LTD <br />
    //                       FEDERAL TOWER, H-362, SHOPPING COMPLEX, <br />
    //                       SECTOR-22, NOIDA – 201301 <br /> 0120 241 1255
    //                       nda@federalbank.co.in
    //                     </td>
    //                   </tr>
    //                   <tr>
    //                     <td>5</td>
    //                     <td>Branch Name</td>
    //                     <td>THE FEDERAL BANK LIMITED</td>
    //                   </tr>

    //                   <tr>
    //                     <td>6</td>
    //                     <td>The 09 Digit MICR code of the Branch</td>
    //                     <td>110049006</td>
    //                   </tr>

    //                   <tr>
    //                     <td>7</td>
    //                     <td>IFSC/RTGS Code of the bank Branch</td>
    //                     <td>FDRL0001340</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="modal-footer">
    //           <button
    //             class="btn btn-primary"
    //             data-bs-dismiss="modal"
    //             onClick={(e) => {
    //               generatePDF(e);
    //               setTempdt([]);
    //               toast.success("Data saved");

    //               // navigate("/paynow");
    //             }}
    //           >
    //             View & Download
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <a
    //     class="btn btn-primary"
    //     data-bs-toggle="modal"
    //     href="#exampleModalToggle"
    //     role="button"
    //     id="messagepop"
    //     style={{ display: "none" }}
    //   >
    //     Open first modal
    //   </a>
    //   {/* <Footer /> */}
    //   <ToastContainer />
    // </>
  );
};

export default TelephoneInternet;
