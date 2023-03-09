import axios from "axios";

import { CurrentUrl } from "./BasicURL";

export const GetEncryptData = async (data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ enString: data }),
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(
    `${CurrentUrl}Payment/Paymentencrypt`,
    requestOptions
  ).then((response) => {
    return response.json();
  });
};

export const GetDeEncryptData = async (data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ enString: data }),
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(
    `${CurrentUrl}Payment/PaymentDecrypt`,
    requestOptions
  ).then((response) => {
    return response.json();
  });
};

export const GetPaymentStatus = async () => {
  const token = localStorage.getItem("jwtToken");

  const id =
    localStorage.getItem("user_name") === "Admin"
      ? "ALL"
      : localStorage.getItem("user_id");
  const requestOptions = {
    method: "GET",

    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Payment/${id}`, requestOptions).then(
    (response) => {
      return response.json();
    }
  );
};
