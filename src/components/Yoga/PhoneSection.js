import classes from './PhoneSection.module.css'
import phoneImg from './../../assets/images/phone.png'
import React from 'react'
const PhoneSection=()=>{

    return(
        <React.Fragment>
            <div className={classes.phone}>
       <h3>Start your yoga journey now!</h3> 
       <img src={phoneImg} alt="Phone displaying positive yoga's page"/>
       </div>
       </React.Fragment>
       )
}
export default PhoneSection