import React from 'react'
import OfferDetails from './OfferDetails/OfferDetails'
import SubscriptionMessage from './OfferDetails/SubscriptionMessage'
import ProgramInformation from './ProgramInformation/ProgramInformation'
import classes from './ProgramOffer.module.css'

const ProgramOffer=()=>{


    return(
        <React.Fragment>
            <section className={classes.program}>
            <span className={classes.message}>Over <b>52 147</b> plans ordered.</span>
            <h1>Get access to your yoga program now!</h1>
           <div className={classes.information}>
               <div className={classes.data}>
           <OfferDetails/>
           <SubscriptionMessage/>
           </div>
           <ProgramInformation/>
           </div>
            </section>
        </React.Fragment>
    )
}

export default ProgramOffer