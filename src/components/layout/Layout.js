import React from "react";
import Header from "./Header";
import Promo from "./Promo";

const Layout=(props)=>{

    return(
        <React.Fragment>
            <Promo/>
            <Header/>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout