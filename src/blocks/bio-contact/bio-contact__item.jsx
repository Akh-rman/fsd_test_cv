import React from "react";

import "./bio-contact__item.scss";

import BioContactText from "./bio-contact__text.jsx";

export default function BioContactItem (props) {
    return (
        <div className = "bio-contact__item">
            <BioContactText class = "bio-contact__type" text = {props.typeText}/>
            <BioContactText class = "bio-contact__value" text = {props.valueText}/>
        </div>
    );
}