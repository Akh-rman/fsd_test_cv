import React from "react";

import "./bio-contact.scss";
import "./bio-contact__main.scss";

import BioHeader from "../bio-header/bio-header.jsx";
import BioContactItem from "./bio-contact__item.jsx";

export default function BioContact (props) {
    let data = [
        {
            type: "ADDRESS",
            value: "Main Street, City."
        },
        {
            type: "E-MAIL",
            value: "contact@domain.com"
        },
        {
            type: "PHONE",
            value: "555-555-555"
        },
        {
            type: "WEBSITE",
            value: "www.yourweb.com"
        }
    ];

    return (
        <div className = "bio-contact">
            <BioHeader class = "bio-header" imageClass = "image image__contact" imageSrc = "./src/blocks/image/images/contact.svg" headerText = "Contact"/>
            <div className = "bio-contact__main">
                <BioContactItem typeText = {data[0].type} valueText = {data[0].value}/>
                <BioContactItem typeText = {data[1].type} valueText = {data[1].value}/>
                <BioContactItem typeText = {data[2].type} valueText = {data[2].value}/>
                <BioContactItem typeText = {data[3].type} valueText = {data[3].value}/>
            </div>
        </div>
    );
}