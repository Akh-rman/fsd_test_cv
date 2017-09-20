import  React from "react";

import "./bio-header__title.scss";

export default function BioHeaderTitle (props) {
    return (
        <h3 className = {props.class}>{props.value}</h3>
    );
}