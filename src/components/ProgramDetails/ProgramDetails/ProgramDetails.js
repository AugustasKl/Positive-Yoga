import React from "react";
import OfferList from "../OfferDetails/OfferList";
import SubscriptionMessage from "../OfferDetails/SubscriptionMessage";
import ProgramInformation from "../ProgramInformation/ProgramInformation";
import classes from "./ProgramDetails.module.css";


// ProgramDetails component is responsible for rendering the data of 
// different yoga's subscription plans and program's benefits.
// ProgramDetails component is used by FirstOffer and SameOffer components
// which are located in ProgramOffers folder.

const ProgramDetails = () => {
  return (
    <React.Fragment>
      <section className={classes.program}>
        <div className={classes.information}>
          <div className={classes.data}>
            <OfferList />
            <SubscriptionMessage />
          </div>
          <ProgramInformation />
        </div>
      </section>
    </React.Fragment>
  );
};
export default ProgramDetails;
