import OfferDetails from "../ProgramOffer/OfferDetails/OfferDetails"
import SubscriptionMessage from "../ProgramOffer/OfferDetails/SubscriptionMessage"
import ProgramInformation from "../ProgramOffer/ProgramInformation/ProgramInformation"
import ProgramOffer from "../ProgramOffer/ProgramOffer"
import classes from './SameOffer.module.css'
const SameOffer=()=>{

    return(
        <section className={classes.offer}>
            <h2>Start your yoga program today! </h2>
                <ProgramOffer/>
        </section>
    )
}

export default SameOffer