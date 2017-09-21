import React from "react";

import "./bio-item-header.scss";

import BioItemHeaderName from "./bio-item-header__name.jsx";
import BioItemHeaderMarker from "./bio-item-header__marker.jsx";
import BioItemHeaderDate from "./bio-item-header__date.jsx";

export default function BioItemHeader (props) {
    return (
        <div className = "bio-item-header">
            <BioItemHeaderMarker/>
            <BioItemHeaderName class = {props.nameClass} text = {props.nameText}/>
            <BioItemHeaderDate text = {props.dateText}/>
        </div>
    );
}