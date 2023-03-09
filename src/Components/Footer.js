import React from "react";

const Footer = () => {
  return (
    <div
      className="footer-copyright text-center py-3"
      style={{
        // position: "absolute",
        // bottom: "0",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="#"> Pavilions & Interiors (I) Pvt Ltd. </a>
    </div>
  );
};

export default Footer;
