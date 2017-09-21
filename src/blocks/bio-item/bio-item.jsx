import React from "react";

import "./bio-item.scss";

import BioItemMain from "../bio-item-main/bio-item-main.jsx"
import BioItemHeader from "../bio-item-header/bio-item-header.jsx";

export default function BioItem (props) {
    return (
        <div className = "bio-item">
            <BioItemHeader nameClass = {props.nameClass} nameText = {props.nameText} dateText = {props.dateText}/>
            <BioItemMain headerText = {props.mainHeaderText} mainText = {props.mainText}/>
        </div>
    );
}