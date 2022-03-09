import React from "react"
import ProgramOffer from "../components/ProgramOffer/ProgramOffer"
import Clients from "../components/clients/Clients"
import Yoga from "../components/Yoga/Yoga"
import Questions from "../components/Questions/Questions"
import SameOffer from "../components/SameOffer/SameOffer"
import Message from "../components/Message/Message"
const Checkout=()=>{

    return(
        <React.Fragment>
            <Message/>
            <ProgramOffer/>
            <Clients/>
            <Yoga/>
            <Questions/>
            <SameOffer/>
        </React.Fragment>
    )
    }

export default Checkout