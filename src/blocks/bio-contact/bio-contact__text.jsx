import React from "react";

import "./bio-contact__type.scss";
import "./bio-contact__value.scss";

export default function BioContactText (props) {
    return (
        <p className={props.class}>{props.text}</p>
    );
}