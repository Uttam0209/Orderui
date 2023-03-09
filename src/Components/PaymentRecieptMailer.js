import React from "react";

const PaymentRecieptMailer = () => {
  return (
    <div>
      <table width="100%" className="wrapper">
        <tbody>
          <tr>
            <td style={{ fontSsize: "11px", color: "#999" }}>
              <div
                style={{
                  display: "block !important",
                  maxWidth: "900px ",
                  margin: "0 auto ",
                  clear: "both",
                  background: "white",
                }}
              >
                <table cellSpacing={20} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <img
                            src="http://orders.pavilionsinteriors.com/Images/logo.png"
                            alt="Logo"
                            style={{ width: "20%" }}
                          />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px solid #909090",
                          borderTop: "2px solid #909090",
                        }}
                      >
                        <p style={{ margin: "5px 0" }}>
                          <h2
                            style={{
                              // fontSize: "30px",
                              color: "rgb(248 200 93)",
                              margin: "10px 0",
                              textShadow: "1px 1px #a89e9e",
                            }}
                          >
                            Payment Receipt
                          </h2>
                          Transaction Referance :pay2351342216
                        </p>

                        <h6
                          style={{
                            color: "rgb(248 200 93)",
                            margin: "30px 0",
                            textShadow: "1px 1px #a89e9e",
                          }}
                        >
                          <b>AMOUNT PAID</b> &#8377;<span>232323</span>
                        </h6>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "70%",
                          }}
                        >
                          <div style={{ marginBottom: "10px" }}>
                            <h6
                              style={{
                                color: "gray",
                                textShadow: "1px 1px #a89e9e",
                                margin: "4px 0",
                              }}
                            >
                              ISSUED TO
                            </h6>
                            <p style={{ margin: "5px 0" }}>
                              Sonu.WebDesigner@mvikas.in{" "}
                            </p>
                            <p>+9187007800887</p>
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <h6
                              style={{
                                color: "gray",
                                textShadow: "1px 1px #a89e9e",
                                margin: "4px 0",
                              }}
                            >
                              PAID ON
                            </h6>
                            <p style={{ margin: "5px 0" }}> 23 feb 2022</p>
                          </div>
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          <h6
                            style={{
                              color: "gray",
                              textShadow: "1px 1px #a89e9e",
                              margin: "4px 0",
                            }}
                          >
                            FULL NAME
                          </h6>
                          <p style={{ margin: "5px 0" }}>Sonu Gaur</p>
                        </div>
                        <div>
                          <table
                            style={{
                              whiteSpace: "nowrap",
                            }}
                          >
                            <thead>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Sr. No.
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Power Typer
                              </th>
                              {/* <th>Specificatione</th> */}
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Power For
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                From
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                To
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                No. of Days{" "}
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Qty (in KW)
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Phase
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Rates/KW
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                              >
                                Amount
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                                scope="col"
                              >
                                GST (18%)
                              </th>
                              <th
                                style={{
                                  background: "#eceaea",
                                  padding: "3px 8px",
                                }}
                                scope="col"
                              >
                                Total Amount
                              </th>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                                {/* <td>{x.specification}</td> */}
                                <td></td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                  <span>&#8377;</span>
                                </td>
                                <td>
                                  <span>&#8377;</span>
                                </td>
                                <td>
                                  <span>&#8377;</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <table
                              style={{
                                boxShadow: "none",
                                width: "25%",
                                whiteSpace: "nowrap",
                                marginBottom: "40px",
                              }}
                            >
                              <thead>
                                <tr>
                                  <th
                                    style={{
                                      background: "#eceaea",
                                      padding: "3px 8px",
                                    }}
                                  >
                                    Total
                                  </th>
                                  <th
                                    style={{
                                      background: "#eceaea",
                                      padding: "3px 8px",
                                    }}
                                  >
                                    GST (18%)
                                  </th>
                                  <th
                                    style={{
                                      background: "#eceaea",
                                      padding: "3px 8px",
                                    }}
                                  >
                                    Grand Total
                                  </th>
                                </tr>
                                <tr>
                                  <td>Total</td>
                                  <td>GST (18%)</td>
                                  <td>Grand Total</td>
                                </tr>
                              </thead>
                            </table>
                          </div>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr className="contact">
                      <td align="center">
                        Pavilions and Interiors india private limited
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentRecieptMailer;
