import React from "react";
import Clients from "../components/Clients/Clients/Clients";
import Yoga from "../components/Yoga/Yoga/Yoga";
import Questions from "../components/Questions/Questions/Questions";
import SameOffer from "../components/ProgramOffers/SameOffer/SameOffer";
import Message from "../components/Message/Message";
import FirstOffer from "../components/ProgramOffers/FirstOffer/FirstOffer";


// pages folder in general is responsible for containing all the data
// of different pages and that is why in this folder
// only ONE Checkout page is placed.
// Checkout page is the parent component of other components
const Checkout = () => {
  return (
    <React.Fragment>
      <Message />
      <FirstOffer />
      <Clients />
      <Yoga />
      <Questions />
      <SameOffer />
    </React.Fragment>
  );
};

export default Checkout;
