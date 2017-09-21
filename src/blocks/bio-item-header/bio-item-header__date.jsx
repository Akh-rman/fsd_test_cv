import React from "react";

import "./bio-item-header__date.scss";

export default function BioItemHeaderDate (props) {
    return (
        <h4 className = "bio-item-header__date">{props.text}</h4>
    );
}