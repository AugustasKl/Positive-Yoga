import React, { useState } from "react";
import classes from "./OfferDetails.module.css";
import { DUMMY_OFFERS } from "../../../DUMMY_DATA/dummyOffers";
import OfferItem from "./OfferItem";
import Button from "../../utils/Button";

const OfferDetails = (props) => {
  const [offer, setOffer] = useState(null);

  const submitSelectedPlanHandler = () => {
    console.log(offer);
  };
  const selectedPlanHandler = (selectedPlan) => {
    setOffer(selectedPlan);
  };

  return (
    <React.Fragment>
      <div className={classes.form}>
        <div className={classes.options}>
          <div className={classes.header}>
          <h2> Choose your plan and get</h2>
            <h2 className={classes.highlight}> 7 days free trial</h2>
          </div>
          <ul>
            {DUMMY_OFFERS.map((offer) => {
              return (
                <OfferItem
                  id={offer.id}
                  key={offer.id}
                  title={offer.title}
                  price={offer.price}
                  oldPrice={offer.oldPrice}
                  newPrice={offer.newPrice}
                  message={offer.message}
                  promo={offer.promo}
                  onSendSelectedData={selectedPlanHandler}
                />
              );
            })}
            {/* <Button type='button' onClick={submitSelectedPlanHandler} className={classes.button}> Get your plan</Button> */}
            <button
              onClick={submitSelectedPlanHandler}
              className={classes.button}
            >
              Get your plan
            </button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OfferDetails;
