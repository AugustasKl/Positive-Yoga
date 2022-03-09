import React from 'react'
import OfferDetails from '../ProgramOffer/OfferDetails/OfferDetails'
import SubscriptionMessage from '../ProgramOffer/OfferDetails/SubscriptionMessage'
import ProgramInformation from '../ProgramOffer/ProgramInformation/ProgramInformation'
import classes from './ProgramDetails.module.css'

const ProgramDetails=()=>{

    return(
        <React.Fragment>
            <section className={classes.program}>
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
export default ProgramDetails