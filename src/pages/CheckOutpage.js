import React from "react"
import Clients from "../components/clients/Clients"
import Yoga from "../components/Yoga/Yoga"
import Questions from "../components/Questions/Questions"
import SameOffer from "../components/SameOffer/SameOffer"
import Message from "../components/Message/Message"
import FirstOffer from "../components/ProgramOffer/firstOffer/FirstOffer"
const Checkout=()=>{

    return(
        <React.Fragment>
            <Message/>
            <FirstOffer/>
            <Clients/>
            <Yoga/>
            <Questions/>
            <SameOffer/>
        </React.Fragment>
    )
    }

export default Checkout