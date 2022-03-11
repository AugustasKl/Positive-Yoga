import React, { useState } from "react";
import classes from "./OfferList.module.css";
import { DUMMY_OFFERS } from "../../../DUMMY_DATA/dummyOffers";
import OfferItem from "./OfferItem";
import Button from "../../utils/Button";

// OfferList component receives data from DUMMY_OFFERS and passes
// that data as props to OfferItem component which is responsible
// for rendering different subscription options

// useState hook is used for getting data from selected
// yoga's subscription plan (OfferItem.js). When the button
// is pressed submitSelectedPlanHandler method is called and then
// the hook manages that data and for now logs it to 
// the console but it could be sent to the back-end.


const OfferList= () => {
  const [offer, setOffer] = useState(null);

    //logging selected option after button click
  const submitSelectedPlanHandler = () => {
    console.log(offer);
  };

  // data received from subsription options
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
            <button onClick={submitSelectedPlanHandler} className={classes.button}>
              Get your plan
            </button>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OfferList;
