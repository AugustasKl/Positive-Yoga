import React from "react"
import Clients from "../components/Clients/Clients"
import Yoga from "../components/Yoga/Yoga"
import Questions from "../components/Questions/Questions"
import SameOffer from "../components/ProgramOffers/SameOffer/SameOffer"
import Message from "../components/Message/Message"
import FirstOffer from "../components/ProgramOffers/FirstOffer/FirstOffer"
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