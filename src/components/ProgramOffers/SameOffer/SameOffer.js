import ProgramDetails from "../../ProgramDetails/ProgramDetails/ProgramDetails"
import classes from './SameOffer.module.css'
const SameOffer=()=>{

    return(
        <section className={classes.offer}>
            <h2 className={classes.header}>Start your yoga program today! </h2>
                <ProgramDetails/>
        </section>
    )
}

export default SameOffer