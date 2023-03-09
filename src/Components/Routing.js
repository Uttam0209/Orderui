import React from "react";
import HomeAdmin from "./HomeAdmin";
import Electricity from "./Electricity";
import AdditionalEquip from "./AdditionalEquip";
import Login from "./Login";
import TelephoneInternet from "./TelephoneInternet";
import { Route, Router, Routes } from "react-router-dom";
import Profile from "./Profile";
import Menpower from "./Menpower";
import AdditionalEquipView from "./AdditionalEquipView";
import ElectricityView from "./ElectricityView";

import Telephoneview from "./Telephoneview";
import Menpowerview from "./Menpowerview";
import Audioview from "./Audioview";
import Audio from "./Audio";
import Golf from "./Golf";
import Golfview from "./Golfview";
import Pantry from "./Pantry";
import Printing from "./Printing";
import Printingview from "./Printingview";
import Pantryview from "./Pantryview";
import Paynow from "./Paynow";
import PaymentReciept from "./PaymentReciept";
import PaymentRecieptMailer from "./PaymentRecieptMailer";
import PaymentStatus from "./PaymentStatus";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<HomeAdmin />} />
        <Route path="/electricity" exact element={<Electricity />} />
        <Route
          path="/additionalequipment"
          exact
          element={<AdditionalEquip />}
        />
        <Route
          path="/telephoneinternet"
          exact
          element={<TelephoneInternet />}
        />{" "}
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/menpower" exact element={<Menpower />} />
        <Route path="/electricityview" exact element={<ElectricityView />} />
        <Route
          path="/additionalquipmentview"
          exact
          element={<AdditionalEquipView />}
        />
        <Route path="/telephoneview" exact element={<Telephoneview />} />
        <Route path="/menpowerview" exact element={<Menpowerview />} />
        <Route path="/audioview" exact element={<Audioview />} />
        <Route path="/audio" exact element={<Audio />} />
        <Route path="/golf" exact element={<Golf />} />
        <Route path="/golfview" exact element={<Golfview />} />
        <Route path="/pantry" exact element={<Pantry />} />
        <Route path="/pantryview" exact element={<Pantryview />} />
        <Route path="/printing" exact element={<Printing />} />
        <Route path="/printingview" exact element={<Printingview />} />
        <Route path="/paynow" exact element={<Paynow />} />
        <Route path="/paymantreciept" exact element={<PaymentReciept />} />
        <Route
          path="/paymantrecieptmailer"
          exact
          element={<PaymentRecieptMailer />}
        />
        <Route path="/paymentstatus" exact element={<PaymentStatus />} />
      </Routes>
    </>
  );
};

export default Routing;
