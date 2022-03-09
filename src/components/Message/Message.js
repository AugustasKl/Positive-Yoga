import React from "react"
import classes from './Message.module.css'

const Message =()=>{

    return(
    <React.Fragment>
        <section className={classes.msg}>
        <span className={classes.message}>Over <b>52 147</b> plans ordered.</span>
        <h1>Get access to your yoga program now!</h1>
        </section>
        </React.Fragment>
    )
}
export default Message