import React from "react"
import BulletSection from "./BulletSection"
import PhoneSection from "./PhoneSection"
import classes from './Yoga.module.css'
const Yoga=()=>{

    return(
        <React.Fragment>
            <section className={classes.yoga}>
                <PhoneSection/>
                <BulletSection/>
            </section>
        </React.Fragment>
    )
}
export default Yoga