import React from "react";

import "./bio-item-main.scss";
import "./bio-item-main__header.scss";

import BioText from "../bio-text/bio-text.jsx";

export default function BioItemMain (props) {
    return (
        <div className = "bio-item-main">
            <h4 className = "bio-item-main__header">{props.headerText}</h4>
            <BioText class = "bio-text" text = {props.mainText}/>
        </div>
    );
}