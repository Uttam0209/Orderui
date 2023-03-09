import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import {
  GetPowerRate,
  SavePowerRate,
  GetPowerDetailsWithOrderNo,
} from "./Services/BasicAPI";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Closed from './Closed'
const Electricity = () => {
  // const navigate = useNavigate();
  // const [userlog, setUserlog] = useState(localStorage.getItem("user_id"));
  // const [basicdata, setBasicdata] = useState();
  // const [tempdt, setTempdt] = useState([]);
  // const [orderid, setOrderid] = useState("");
  // var curr = new Date();
  // curr.setDate(curr.getDate());
  // var todaydate = curr.toISOString().substr(0, 10);
  // const [data, setData] = useState({
  //   companyUniqueID: localStorage.getItem("user_id"),
  //   powerFor: "",
  //   powerType: "",
  //   qty: "",
  //   unit: 0,
  //   phase: "",
  //   amount: 0,
  //   tax: 0,
  //   grandTotal: 0,
  //   from: "",
  //   to: "",
  //   days: 0,
  //   appByOrg: "Y",
  //   invoiceGen: "N",
  //   invoiceNo: "N",
  //   cancelStatus: "N",
  //   recTime: `${curr.getMonth()}-${curr.getDate()}-${curr.getFullYear()}`,
  // });

  // const InputEvent = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   var newdata = [];
  //   if (name === "powerType") {
  //     data.powerFor === "During Show"
  //       ? (newdata = basicdata.filter((val) => {
  //           return val.powerType === data.powerFor;
  //         }))
  //       : (newdata = basicdata.filter((val) => {
  //           return val.powerType === "Pre / Post Event ";
  //         }));
  //     let ratedata = [];
  //     if (data.powerFor === "During Show") {
  //       ratedata = newdata.filter((val) => {
  //         return val.powerDesc === value;
  //       });
  //     } else {
  //       ratedata = newdata;
  //     }
  //     newdata.length === 0
  //       ? setData({
  //           ...data,
  //           [name]: value,
  //           qty: "",
  //           phase: "",
  //           amount: 0,
  //           tax: 0,
  //           grandTotal: 0,
  //         })
  //       : setData({
  //           ...data,
  //           [name]: value,
  //           from: "2023-02-13",
  //           to: "2023-02-17",
  //           days: 5,
  //           qty: "",
  //           phase: "",
  //           amount: 0,
  //           tax: 0,
  //           grandTotal: 0,
  //           unit:
  //             localStorage.getItem("user_country") === "India"
  //               ? ratedata[0].rateINR
  //               : ratedata[0].rateUSD,
  //         });
  //   } else if (name === "powerFor" && data.powerType !== "") {
  //     if (data.powerType !== "") {
  //       setData({
  //         ...data,
  //         [name]: value,
  //         qty: "",
  //         phase: "",
  //         amount: 0,
  //         tax: 0,
  //         grandTotal: 0,
  //         unit: 0,
  //         powerType: "",
  //       });
  //     } else {
  //       value === "During Show"
  //         ? (newdata = basicdata.filter((val) => {
  //             return val.powerType === value;
  //           }))
  //         : (newdata = basicdata.filter((val) => {
  //             return val.powerType === "Pre / Post Event ";
  //           }));

  //       let ratedata = [];
  //       if (value === "During Show")
  //         ratedata = newdata.filter((val) => {
  //           return val.powerDesc === "Per Day";
  //         });

  //       newdata.length === 0
  //         ? setData({
  //             ...data,
  //             [name]: value,
  //             qty: "",
  //             phase: "",
  //             amount: 0,
  //             tax: 0,
  //             grandTotal: 0,
  //           })
  //         : setData({
  //             ...data,
  //             [name]: value,
  //             from: "2023-02-13",
  //             to: "2023-02-17",
  //             days: 5,
  //             qty: "",
  //             phase: "",
  //             amount: 0,
  //             tax: 0,
  //             grandTotal: 0,
  //             unit:
  //               localStorage.getItem("user_country") === "India"
  //                 ? ratedata[0].rateINR
  //                 : ratedata[0].rateUSD,
  //           });
  //     }
  //   } else {
  //     setData({
  //       ...data,
  //       [name]: value,
  //       from: "2023-02-01",
  //       to: "2023-02-12",
  //       days: 5,
  //     });
  //   }
  // };
  // useEffect(() => {
  //   if (userlog === undefined || userlog === null) {
  //     navigate("/");
  //   } else {
  //     GetPowerRate().then((res) => {
  //       setBasicdata(res.data);
  //     });
  //   }
  // }, []);
  // const handleRemoveClick = (index) => {
  //   const list = [...tempdt];
  //   list.splice(index, 1);
  //   setTempdt(list);
  // };
  // const SaveData = () => {
  //   const Oid = `ELE/${localStorage.getItem(
  //     "user_id"
  //   )}/${curr.getDate()}${curr.getHours()}${curr.getMinutes()}${curr.getSeconds()}`;
  //   setOrderid(Oid);
  //   const list = [...tempdt];
  //   list.map((val) => {
  //     val.invoiceNo = Oid;
  //   });
  //   setTempdt(list);
  //   document.getElementById("messagepop").click();
  //   tempdt.map((val) => {
  //     SavePowerRate(val).then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //       }
  //     });
  //   });
  // };

  // // handle click event of the Add button

  // const handleAddClick = (e) => {
  //   var fromdt = new Date(data.from);
  //   var todt = new Date(data.to);
  //   console.log("click", typeof fromdt);
  //   console.log(fromdt.getMonth());
  //   if (
  //     data.qty === "" ||
  //     data.phase === "" ||
  //     data.powerFor === "" ||
  //     data.powerType === ""
  //   )
  //     toast.warn("All fields are mandatory ");
  //   else if (data.qty === 0) toast.warn("Quantity must be greater than 0");
  //   else {
  //     setTempdt([
  //       ...tempdt,
  //       {
  //         companyUniqueID: data.companyUniqueID,
  //         powerFor: data.powerFor,
  //         powerType: data.powerType,
  //         qty: data.qty,
  //         unit: data.unit,
  //         phase: data.phase,
  //         amount: data.amount,
  //         tax: data.tax,
  //         grandTotal: data.grandTotal,

  //         form: data.from,
  //         to: data.to,
  //         days: data.days,
  //         appByOrg: data.appByOrg,
  //         invoiceGen: data.invoiceGen,
  //         invoiceNo: data.invoiceNo,
  //         cancelStatus: data.cancelStatus,

  //         recTime: todaydate,
  //       },
  //     ]);
  //     setData({
  //       ...data,
  //       qty: "",
  //       phase: "",
  //       amount: 0,
  //       tax: 0,
  //       grandTotal: 0,
  //       from: "",
  //       to: "",
  //       days: 0,
  //     });
  //   }
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

  // // SndOrderNo;SndOrderNo;

  // const SndOrderNo = () => {
  //   GetPowerDetailsWithOrderNo(orderid).then((res) => {});
  // };

  return (
    <>
      <Sidebar />
      <AdminHeader />
      <div className="content-wrapper">
        <div className="container px-lg-5 px-3">
          <div className="d-flex justify-content-between  align-items-baseline py-3">
            <h2>Electricity</h2>{" "}
            <Link to="/electricityview" className="text-white btn btn-info">
              View
            </Link>
          </div>
          <Closed/>
          </div>
          </div>
          </>
    //       <div className="row">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <label>Select Electricity For :</label>
    //             <select
    //               className="form-control"
    //               value={data.powerFor}
    //               name="powerFor"
    //               onChange={InputEvent}
    //             >
    //               <option selected hidden>
    //                 Select
    //               </option>
    //               <option value="During Show">During Show</option>
    //               <option value="Pre Show">Pre Show</option>
    //               <option value="Post Show">Post Show</option>
    //             </select>
    //           </div>
    //           <div className="col-md-6">
    //             <label>Select Electricity Type :</label>
    //             <select
    //               className="form-control"
    //               value={data.powerType}
    //               name="powerType"
    //               onChange={InputEvent}
    //             >
    //               <option selected hidden>
    //                 {" "}
    //                 Select
    //               </option>
    //               {data.powerFor === "During Show" ? (
    //                 <>
    //                   <option value="12 Hours">Permanent 12 Hr</option>
    //                   <option value="24 Hours">Permanent 24 Hr</option>
    //                 </>
    //               ) : data.powerFor === "Pre Show" ||
    //                 data.powerFor === "Post Show" ? (
    //                 <option value="Temporary">Temporary</option>
    //               ) : (
    //                 ""
    //               )}
    //             </select>
    //           </div>
    //         </div>
    //         {data.powerFor !== "" && data.powerType !== "" ? (
    //           data.powerFor === "Pre Show" || data.powerFor === "Post Show" ? (
    //             <table className="table text-nowrap">
    //               <thead>
    //                 <tr>
    //                   <th scope="col">Dates</th>
    //                   <th scope="col" className="text-end">
    //                     Days
    //                   </th>
    //                   <th scope="col">Qty (in KW)</th>
    //                   <th scope="col">Phase</th>
    //                   <th scope="col" className="text-end">
    //                     Rates/KW
    //                   </th>
    //                   <th scope="col" className="text-end">
    //                     Amounts
    //                   </th>
    //                   <th scope="col" className="text-end">
    //                     GST (18%)
    //                   </th>
    //                   <th scope="col" className="text-end">
    //                     Total Amount
    //                   </th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 <tr>
    //                   <td>
    //                     <div className="input-group mb-3">
    //                       <span className="input-group-text">From</span>
    //                       <input
    //                         type="date"
    //                         className="form-control"
    //                         value={data.from}
    //                         name="from"
    //                         onChange={(e) => {
    //                           if (e.target.name === "from" && data.to !== "") {
    //                             let fromdt = new Date(e.target.value);
    //                             let todt = new Date(data.to);
    //                             setData({
    //                               ...data,
    //                               from: e.target.value,
    //                               days:
    //                                 Math.abs(
    //                                   (+fromdt.getTime() - +todt.getTime()) /
    //                                     (1000 * 60 * 60 * 24)
    //                                 ) + 1,
    //                               qty: "",
    //                               amount: 0,
    //                               tax: 0,
    //                               grandTotal: 0,
    //                             });
    //                           } else {
    //                             setData({
    //                               ...data,
    //                               [e.target.name]: e.target.value,
    //                             });
    //                           }
    //                         }}
    //                       />{" "}
    //                     </div>{" "}
    //                     <div className="input-group mb-3">
    //                       <span className="input-group-text ml-1">To</span>
    //                       <input
    //                         type="date"
    //                         className="form-control"
    //                         value={data.to}
    //                         name="to"
    //                         onChange={(e) => {
    //                           if (e.target.name === "to" && data.from !== "") {
    //                             let fromdt = new Date(data.from);
    //                             let todt = new Date(e.target.value);
    //                             setData({
    //                               ...data,

    //                               to: e.target.value,
    //                               days:
    //                                 Math.abs(
    //                                   (+fromdt.getTime() - +todt.getTime()) /
    //                                     (1000 * 60 * 60 * 24)
    //                                 ) + 1,
    //                               qty: "",
    //                               amount: 0,
    //                               tax: 0,
    //                               grandTotal: 0,
    //                             });
    //                           } else {
    //                             setData({
    //                               ...data,
    //                               [e.target.name]: e.target.value,
    //                             });
    //                           }
    //                         }}
    //                       />
    //                     </div>
    //                   </td>
    //                   <td className="text-end">{data.days}</td>
    //                   <td>
    //                     <input
    //                       type="text"
    //                       className="form-control "
    //                       value={data.qty}
    //                       name="qty"
    //                       onChange={(e) => {
    //                         if (!isNaN(e.target.value)) {
    //                           setData({
    //                             ...data,
    //                             amount: e.target.value * data.unit * data.days,
    //                             tax:
    //                             (e.target.value *
    //                                 data.unit *
    //                                 data.days *
    //                                 18) /
    //                               100,
    //                             grandTotal:
    //                               e.target.value * data.unit * data.days +
    //                               (e.target.value *
    //                                 data.unit *
    //                                 data.days *
    //                                 18) /
    //                                 100,
    //                             qty: +e.target.value,
    //                           });
    //                         }
    //                       }}
    //                     />
    //                   </td>
    //                   <td>
    //                     <select
    //                       value={data.phase}
    //                       name="phase "
    //                       className="form-control "
    //                       onChange={(e) => {
    //                         setData({ ...data, phase: +e.target.value });
    //                       }}
    //                     >
    //                       <option selected hidden>
    //                         Select
    //                       </option>
    //                       <option value="1">1</option>
    //                       <option value="2">2</option>

    //                       <option value="3">3</option>
    //                       <option value="4">4</option>
    //                       <option value="5">5</option>
    //                       <option value="6">6</option>
    //                     </select>
    //                   </td>
    //                   <td className="text-end">
    //                     &#8377;
    //                     {data.unit}
    //                   </td>
    //                   <td className="text-end">
    //                     &#8377;
    //                     {Math.round(data.amount).toFixed(0)}
    //                   </td>
    //                   <td className="text-end">
    //                     &#8377;
    //                     {Math.round(data.tax).toFixed(0)}
    //                   </td>
    //                   <td className="text-end">
    //                     &#8377;
    //                     {Math.round(data.grandTotal).toFixed(0)}
    //                   </td>
    //                 </tr>
    //                 <tr>
    //                   <th
    //                     scope="col"
    //                     colSpan="8"
    //                     style={{ textAlign: "right" }}
    //                   >
    //                     <button
    //                       className="btn btn-outline-success"
    //                       onClick={handleAddClick}
    //                     >
    //                       Apply for Power
    //                     </button>
    //                   </th>
    //                 </tr>
    //               </tbody>
    //             </table>
    //           ) : (
    //             <div>
    //               {" "}
    //               <table className="table text-nowrap  mt-5">
    //                 <thead>
    //                   <tr>
    //                     <th scope="col">Qty (in KW)</th>
    //                     <th scope="col">Phase</th>
    //                     <th scope="col" className="text-end">
    //                       Rates/KW
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Amounts
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       GST (18%)
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Total Amount
    //                     </th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>
    //                       <input
    //                         type="text"
    //                         value={data.qty}
    //                         name="qty"
    //                         onChange={(e) => {
    //                           if (!isNaN(e.target.value)) {
    //                             setData({
    //                               ...data,
    //                               amount: e.target.value * data.unit,
    //                               tax: (e.target.value * data.unit * 18) / 100,
    //                               grandTotal:
    //                                 e.target.value * data.unit +
    //                                 (e.target.value * data.unit * 18) / 100,
    //                               qty: +e.target.value,
    //                             });
    //                           }
    //                         }}
    //                         className="form-control"
    //                       />
    //                     </td>
    //                     <td>
    //                       <select
    //                         value={data.phase}
    //                         name="phase "
    //                         className="form-control "
    //                         onChange={(e) => {
    //                           setData({ ...data, phase: +e.target.value });
    //                         }}
    //                       >
    //                         <option selected hidden>
    //                           Select
    //                         </option>
    //                         <option value="1">1</option>
    //                         <option value="2">2</option>

    //                         <option value="3">3</option>
    //                         <option value="4">4</option>
    //                         <option value="5">5</option>
    //                         <option value="6">6</option>
    //                       </select>
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {data.unit}
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {Math.round(data.amount).toFixed(0)}
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {Math.round(data.tax).toFixed(0)}
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {Math.round(data.grandTotal).toFixed(0)}
    //                     </td>
    //                   </tr>

    //                   <tr>
    //                     <th
    //                       scope="col"
    //                       colSpan="8"
    //                       style={{ textAlign: "right" }}
    //                     >
    //                       <button
    //                         className="btn btn-outline-success"
    //                         onClick={handleAddClick}
    //                       >
    //                         Apply for Power
    //                       </button>
    //                     </th>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //           )
    //         ) : (
    //           <></>
    //         )}
    //       </div>
    //       {tempdt.length === 0 ? (
    //         ""
    //       ) : (
    //         <div className="table-responsive">
    //           <table className="table text-nowrap">
    //             <thead>
    //               <th>Sr. No.</th>
    //               <th scope="col">Power Type</th>
    //               <th scope="col">Power For</th>
    //               <th scope="col" className="text-end">
    //                 No. of Days
    //               </th>
    //               <th scope="col" className="text-end">
    //                 Qty (in KW)
    //               </th>
    //               <th scope="col" className="text-end">
    //                 Phase
    //               </th>
    //               <th scope="col" className="text-end">
    //                 Rates/KW
    //               </th>
    //               <th scope="col" className="text-end">
    //                 Amounts
    //               </th>
    //               <th scope="col" className="text-end">
    //                 GST (18%)
    //               </th>
    //               <th scope="col" className="text-end">
    //                 Total Amount
    //               </th>
    //             </thead>
    //             <tbody>
    //               {tempdt.map((x, i) => {
    //                 return (
    //                   <tr key={i}>
    //                     <td>{i + 1}</td>
    //                     <td>{x.powerType}</td>
    //                     <td>{x.powerFor}</td>
    //                     <td className="text-end">{x.days}</td>
    //                     <td className="text-end">{x.qty}</td>
    //                     <td className="text-end">{x.phase}</td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {x.unit}
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {Math.round(x.amount).toFixed(0)}
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {Math.round(x.tax).toFixed(0)}
    //                     </td>
    //                     <td className="text-end">
    //                       &#8377;
    //                       {Math.round(x.grandTotal).toFixed(0)}
    //                     </td>
    //                     <td className="text-end">
    //                       <span
    //                         className="fas fa-times-circle btn text-danger ml-2 p-0 p-lg-auto"
    //                         onClick={() => handleRemoveClick(i)}
    //                       ></span>
    //                     </td>
    //                   </tr>
    //                 );
    //               })}
    //             </tbody>
    //           </table>
    //           <div className="d-flex justify-content-end">
    //             <table className="table w-25" style={{ boxShadow: "none" }}>
    //               <thead>
    //                 <tr>
    //                   <th>Total</th>
    //                   <th style={{ textAlign: "right" }}>
    //                     &#8377;
    //                     {Math.round(
    //                       tempdt.reduce((a, b) => +a + +b.amount, 0)
    //                     ).toFixed(0)}
    //                   </th>
    //                 </tr>
    //                 <tr>
    //                   <th>GST (18%)</th>
    //                   <th style={{ textAlign: "right" }}>
    //                     &#8377;
    //                     {Math.round(
    //                       (tempdt.reduce((a, b) => +a + +b.amount, 0) * 18) /
    //                         100
    //                     ).toFixed(0)}
    //                   </th>
    //                 </tr>
    //                 <tr>
    //                   <th>Grand Total</th>
    //                   <th style={{ textAlign: "right" }}>
    //                     &#8377;
    //                     {Math.round(
    //                       (
    //                         tempdt.reduce((a, b) => +a + +b.amount, 0) * 1.18
    //                       ).toFixed(0)
    //                     )}
    //                   </th>
    //                 </tr>
    //               </thead>
    //             </table>
    //           </div>
    //           <button
    //             className="btn btn-success float-right mr-2 mt-3"
    //             onClick={SaveData}
    //           >
    //             Save & Submit
    //           </button>
    //         </div>
    //       )}
    //     </div>

    //     <div
    //       class="modal fade"
    //       id="exampleModalToggle"
    //       aria-hidden="true"
    //       data-bs-backdrop="static"
    //       aria-labelledby="exampleModalToggleLabel"
    //       tabindex="-1"
    //     >
    //       <div class="modal-dialog  modal-dialog-centered">
    //         <div class="modal-content">
    //           <div class="modal-header">
    //             <h2 class="modal-title" id="exampleModalToggleLabel">
    //               Confirmation
    //             </h2>
    //           </div>
    //           <div class="modal-body">
    //             Your order has been submitted successfully
    //           </div>
    //           <div class="modal-footer">
    //             <button
    //               class="btn btn-primary"
    //               data-bs-target="#exampleModalToggle2"
    //               data-bs-toggle="modal"
    //               data-bs-dismiss="modal"
    //               onClick={SndOrderNo}
    //             >
    //               View receipt & Proceed
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       class="modal fade"
    //       id="exampleModalToggle2"
    //       aria-hidden="true"
    //       aria-labelledby="exampleModalToggleLabel2"
    //       tabindex="-1"
    //     >
    //       <div class="modal-dialog modal-dialog-centered modal-xl">
    //         <div class="modal-content" id="pdfdata">
    //           <div class="modal-header">
    //             <h2 class="modal-title" id="exampleModalToggleLabel2">
    //               Receipt
    //             </h2>
    //           </div>
    //           <div class="modal-body">
    //             <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //               <div class="container-fluid">
    //                 <a class="navbar-brand" style={{ width: "15%" }}>
    //                   <img
    //                     src="./Images/logo.png"
    //                     className="img-fluid"
    //                     alt=""
    //                     style={{ borderRight: "2px solid darkgray" }}
    //                   />
    //                 </a>
    //                 <button
    //                   class="navbar-toggler"
    //                   type="button"
    //                   data-bs-toggle="collapse"
    //                   data-bs-target="#navbarNavAltMarkup"
    //                   aria-controls="navbarNavAltMarkup"
    //                   aria-expanded="false"
    //                   aria-label="Toggle navigation"
    //                 >
    //                   <span class="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div
    //                   class="collapse navbar-collapse"
    //                   id="navbarNavAltMarkup"
    //                 >
    //                   <div class="navbar-nav navbar-nav-modal d-flex justify-content-between">
    //                     <div className="me-lg-5 me-0">
    //                       <span style={{ color: "#000" }}>
    //                         Head Off : A-63, Sector 57, Noida 201301 (UP)
    //                       </span>
    //                       <br />
    //                       <span style={{ color: "#000" }}>
    //                         Ph: 0120-4513400 2581217/18 2581119
    //                       </span>
    //                       <br />
    //                       <span style={{ color: "#000" }}>
    //                         Fax : 0120-2581215
    //                       </span>
    //                       <br />
    //                       <span style={{ color: "#000" }}>
    //                         EMAIL: accounts@pavlionsunteriors.com
    //                       </span>
    //                       <br />
    //                     </div>
    //                     <div className="ms-lg-5 ms-0">
    //                       <span style={{ color: "#000" }}>
    //                         GST No : 09AACCP5781C1ZD
    //                       </span>
    //                       <br />
    //                       <span style={{ color: "#000" }}>
    //                         CIN No: U74899DL 1986PTC26155
    //                       </span>
    //                       <br />
    //                       <span style={{ color: "#000" }}>
    //                         PAN No. : AACCP5781C
    //                       </span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </nav>
    //             <hr style={{ marginTop: "0rem", marginBottom: "3rem" }} />
    //             <div className="col-md-12 col-sm-12">
    //               <h3 className="mb-4">Order No. : {orderid}</h3>
    //               <div className="table-responsive">
    //                 <table className="table text-nowrap">
    //                   <thead>
    //                     <th>Sr. No.</th>
    //                     <th scope="col">Power Type</th>
    //                     <th scope="col">Power For</th>
    //                     <th scope="col" className="text-end">
    //                       No. of Days
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Qty (in KW)
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Phase
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Rates/KW
    //                     </th>
    //                     <th scope="col" className="text-end">
    //                       Amounts
    //                     </th>
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
    //                         <tr key={i}>
    //                           <td>{i + 1}</td>
    //                           <td>{x.powerType}</td>
    //                           <td>{x.powerFor}</td>
    //                           <td className="text-end">{x.days}</td>
    //                           <td className="text-end">{x.qty}</td>
    //                           <td className="text-end">{x.phase}</td>
    //                           <td className="text-end">
    //                             &#8377;
    //                             {x.unit}
    //                           </td>
    //                           <td className="text-end">
    //                             &#8377;
    //                             {Math.round(x.amount).toFixed(0)}
    //                           </td>
    //                           <td className="text-end">
    //                             &#8377;
    //                             {Math.round(x.tax).toFixed(0)}
    //                           </td>
    //                           <td className="text-end">
    //                             &#8377;
    //                             {Math.round(x.grandTotal).toFixed(0)}
    //                           </td>
    //                         </tr>
    //                       );
    //                     })}
    //                     <tr>
    //                       <td colSpan={7}></td>
    //                       <td colSpan="3">
    //                         <table className="table  text-nowrap">
    //                           <thead>
    //                             <tr>
    //                               <th>Total</th>
    //                               <th style={{ textAlign: "right" }}>
    //                                 &#8377;
    //                                 {Math.round(
    //                                   tempdt.reduce((a, b) => +a + +b.amount, 0)
    //                                 ).toFixed(0)}
    //                               </th>
    //                             </tr>
    //                             <tr>
    //                               <th>GST (18%)</th>
    //                               <th style={{ textAlign: "right" }}>
    //                                 &#8377;
    //                                 {Math.round(
    //                                   (tempdt.reduce(
    //                                     (a, b) => +a + +b.amount,
    //                                     0
    //                                   ) *
    //                                     18) /
    //                                     100
    //                                 ).toFixed(0)}
    //                               </th>
    //                             </tr>
    //                             <tr>
    //                               <th>Grand Total</th>
    //                               <th style={{ textAlign: "right" }}>
    //                                 &#8377;
    //                                 {Math.round(
    //                                   (
    //                                     tempdt.reduce(
    //                                       (a, b) => +a + +b.amount,
    //                                       0
    //                                     ) * 1.18
    //                                   ).toFixed(0)
    //                                 )}
    //                               </th>
    //                             </tr>
    //                           </thead>
    //                         </table>
    //                       </td>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //               </div>
    //               <h3
    //                 style={{
    //                   textAlign: "center",
    //                   marginTop: "1.5rem",
    //                   marginBottom: "1.5rem",
    //                 }}
    //               >
    //                 PAVILIONS & INTERIORS BANK ACCOUNT DETAILS
    //               </h3>
    //               <div className="table-responsive">
    //                 <table
    //                   className="table  text-nowrap"
    //                   style={{ marginTop: "0.5rem" }}
    //                 >
    //                   <thead>
    //                     <tr>
    //                       <th>S.No.</th>
    //                       <th>Particulars</th>
    //                       <th>Details</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     <tr>
    //                       <td>1</td>
    //                       <td>Name and address of the Beneficiary.</td>
    //                       <td>
    //                         PAVILIONS AND INTERIORS (i) PVT.LTD.,
    //                         <br />
    //                         A-63 SECTOR - 57,NOIDA - 201310
    //                       </td>
    //                     </tr>
    //                     <tr>
    //                       <td>2</td>
    //                       <td>Account number of Beneficiary</td>
    //                       <td>13405600002949</td>
    //                     </tr>
    //                     <tr>
    //                       <td>3</td>
    //                       <td>Account type (CA/CC/SB)</td>
    //                       <td>OVER DRAFT CASH CREDIT (ODCC)</td>
    //                     </tr>
    //                     <tr>
    //                       <td>4</td>
    //                       <td>
    //                         Name & Address of the Bank Branch (where payments
    //                         are to be sent by PCRA)
    //                       </td>
    //                       <td>
    //                         THE FEDERAL BANK LTD <br />
    //                         FEDERAL TOWER, H-362, SHOPPING COMPLEX, <br />
    //                         SECTOR-22, NOIDA – 201301 <br /> 0120 241 1255
    //                         nda@federalbank.co.in
    //                       </td>
    //                     </tr>
    //                     <tr>
    //                       <td>5</td>
    //                       <td>Branch Name</td>
    //                       <td>THE FEDERAL BANK LIMITED</td>
    //                     </tr>

    //                     <tr>
    //                       <td>6</td>
    //                       <td>The 09 Digit MICR code of the Branch</td>
    //                       <td>110049006</td>
    //                     </tr>

    //                     <tr>
    //                       <td>7</td>
    //                       <td>IFSC/RTGS Code of the bank Branch</td>
    //                       <td>FDRL0001340</td>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //               </div>{" "}
    //             </div>
    //           </div>
    //           <div class="modal-footer">
    //             <button
    //               class="btn btn-primary"
    //               data-bs-dismiss="modal"
    //               onClick={(e) => {
    //                 generatePDF(e);
    //                 setTempdt([]);
    //                 toast.success("Data saved");
    //                 //navigate("/paynow");
    //               }}
    //             >
    //               View & Download
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <a
    //       class="btn btn-primary"
    //       data-bs-toggle="modal"
    //       href="#exampleModalToggle"
    //       role="button"
    //       id="messagepop"
    //       style={{ display: "none" }}
    //     >
    //       Open first modal
    //     </a>
    //   </div>
    //   {/* <Footer /> */}
    //   <ToastContainer />
    // </>
  );
};

export default Electricity;
