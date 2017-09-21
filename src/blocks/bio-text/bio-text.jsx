import React from "react";

import "./bio-text.scss";

export default function BioText (props) {
    return (
        <p className = {props.class}>{props.text}</p>
    );
}