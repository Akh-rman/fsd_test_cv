import React from "react";

export default function BioNameText (props) {
    return (
        <h2 className = {props.class}>{props.text}</h2>
    );
}