import React from "react"
import BulletSection from "../BulletSection/BulletSection"
import PhoneSection from "../PhoneSection/PhoneSection"
import classes from './Yoga.module.css'

//Yoga component is used by Checkout component. Yoga componentent is responsible
// for rendering PhoneSection and BulletSection's components

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