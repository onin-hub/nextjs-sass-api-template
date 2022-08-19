import Headofhtml from "./head/head.Layout"
import React from "react"
import HeaderTag from "./header/Header.Layout"
import Footer from "./footer/Footer.Layout"


export default function Layout({children}: any) {
    return (
        /**
         * @React.Fragment avoid unexpected additional node in the DOM
         */
        <React.Fragment>
            <Headofhtml />
            <div className="main-container">
                <HeaderTag/>
                {children}
                <Footer/>
            </div>
        </React.Fragment>
    )
}