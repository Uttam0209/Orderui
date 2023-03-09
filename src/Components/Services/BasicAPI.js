import { CurrentUrl } from "./BasicURL";
import axios from "axios";

//===============User api===============
export const Loginuser = async (Data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}User/authenticate`, requestOptions).then(
    (response) => {
      return response;
    }
  );
};

export const Loginuserdirect = async (Data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(
    `${CurrentUrl}GetLoginSSO?CompanyUniqueID=${Data}`,
    requestOptions
  ).then((response) => {
    return response.json();
  });
};

//===============Electricity api=============

export const GetAllPowerData = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}PowerRequest`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const GetPowerRate = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetPowerRate`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const SavePowerRate = async (Data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}PowerRequest`, requestOptions).then(
    (response) => {
      return response;
    }
  );
};
export const GetPowerRequestByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}PowerRequest/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetPowerDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetPowerDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetPowerRequestDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetPowerRequestDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=ELECTRICITY`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//==============Additional Equipment==========
export const GetAllEquipmentRental = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}EquipmentRental`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const FurnitureAdditionalItemsRate = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}FurnitureAdditionalItemsRate`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const GetEquipmentRentalByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}EquipmentRental/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const SaveEquipmentRental = async (Data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}EquipmentRental`, requestOptions).then(
    (response) => {
      return response;
    }
  );
};

export const GetEquipmentDetailWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetEquipmentDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetEquipmentRentalDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetEquipmentRentalDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=EQUIPMENT`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
//================Telephone / Internet ============

export const GetTelephoneData = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}Telephone`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const SaveTelephone = async (Data) => {
  console.log(Data);
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}Telephone`, requestOptions).then(
    (response) => {
      return response;
    }
  );
};
export const GetTelephoneDataByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}Telephone/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetTelephoneDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetTelephoneDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetTelephoneDetailWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetTelephoneDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetTemporaryStaffDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetTemporaryStaffDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=MANPOWER`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//=====================Get RateList ===================
export const GetRatelist = async (form) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}RateList/${form}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//==================Temporary Staff==============
export const GetTemporaryStaff = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}TemporaryStaff`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const SaveTemporaryStaff = async (Data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}TemporaryStaff`, requestOptions).then(
    (response) => {
      return response;
    }
  );
};
export const GetTemporaryStaffByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}TemporaryStaff/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetTemporaryDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetTemporaryDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetTelephoneDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetTelephoneDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=INTERNET`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//================Audio=====================
export const GetAllAudioData = async () => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}Audio`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const SaveAudio = async (Data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}Audio`, requestOptions).then((response) => {
    return response;
  });
};
export const GetAudioByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}Audio/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetAudioDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetAudioDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const GetAudioDetailWithOrderNoAllSP = async (id, criteria) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetAudioDetailWithOrderNoAllSP?CompId=${id}&Criteria=${criteria}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetAudioDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetAudioDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=Audio`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//================Golf=============
export const GetAllGolf = async (id) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Golf`, requestOptions).then((response) => {
    return response.json();
  });
};

export const GetGolfByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Golf/${id}`, requestOptions).then(
    (response) => {
      return response.json();
    }
  );
};
export const SaveGolf = async (Data) => {
  console.log(Data);
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}Golf`, requestOptions).then((response) => {
    return response;
  });
};

export const GetGolfDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetGolfDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
export const GetGolfDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetGolfDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=GOLF`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//========Pantry============
export const GetAllPantry = async (id) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Pantry`, requestOptions).then((response) => {
    return response.json();
  });
};

export const GetPantryByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Pantry/${id}`, requestOptions).then(
    (response) => {
      return response.json();
    }
  );
};
export const SavePantry = async (Data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}Pantry`, requestOptions).then((response) => {
    return response;
  });
};

export const GetPantryDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetPantryDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetPantryDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetPantryDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=PANTRY`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

//================Printing===============

export const GetAllPrinting = async (id) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Printing`, requestOptions).then(
    (response) => {
      return response.json();
    }
  );
};
export const GetPrintingByid = async (id) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${CurrentUrl}Printing/${id}`, requestOptions).then(
    (response) => {
      return response.json();
    }
  );
};
export const SavePrinting = async (Data) => {
  const token = localStorage.getItem("jwtToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "access-control-allow-credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  };
  return await fetch(`${CurrentUrl}Printing`, requestOptions).then(
    (response) => {
      return response;
    }
  );
};

export const GetPrintingDetailsWithOrderNo = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(`${CurrentUrl}GetPrintingDetailWithOrderNo?InvoiceNo=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetPrintingDetailWithOrderNoTypeSP = async (id) => {
  const token = localStorage.getItem("jwtToken");
  return await axios
    .get(
      `${CurrentUrl}GetPrintingDetailWithOrderNoTypeSP?OrderNo=${id}&Criteria=PRINTING`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "access-control-allow-credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
