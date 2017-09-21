import React from "react";

import "./bio-item-header__name.scss";
import "./bio-item-header__name_black.scss";
import "./bio-item-header__name_blue.scss";

export default function BioItemHeaderName (props) {
    return (
        <h3 className = {props.class}>{props.text}</h3>
    );
}