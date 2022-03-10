import React from "react"
import classes from './Message.module.css'

const Message =()=>{

    return(
    <React.Fragment>
        <section className={classes.msg}>
        <span>Over <b>52 147</b> plans ordered.</span>
        </section>
        </React.Fragment>
    )
}
export default Message