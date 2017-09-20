import React from "react";
/*** styles ***/
import "./bio.scss";
/*********/
/*** React components ***/
import BioName from "../bio-name/bio-name.jsx";
import BioHeader from "../bio-header/bio-header.jsx";
/*********/

export default function App (props) {
    return (
        <div className = {props.class}>

            <BioHeader class = "bio-header" imageClass = "image image__contact" imageSrc = "./src/blocks/image/images/contact.svg"/>
        </div>
    );
}