import ProgramDetails from "../ProgramDetails/ProgramDetails"
import classes from './SameOffer.module.css'
const SameOffer=()=>{

    return(
        <section className={classes.offer}>
            <h2>Start your yoga program today! </h2>
                <ProgramDetails/>
        </section>
    )
}

export default SameOffer