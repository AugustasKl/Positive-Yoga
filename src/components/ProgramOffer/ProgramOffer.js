import React from 'react'
import OfferDetails from './OfferDetails/OfferDetails'
import SubscriptionMessage from './OfferDetails/SubscriptionMessage'
import ProgramInformation from './ProgramInformation/ProgramInformation'
import classes from './ProgramOffer.module.css'

const ProgramOffer=()=>{


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

export default ProgramOffer