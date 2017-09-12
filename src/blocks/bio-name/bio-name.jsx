import React from "react";
/*** styles ***/
import "./bio-name.scss";
import "./bio-name__name.scss";
import "./bio-name__surname.scss";
import "./bio-name__profession.scss";
/*******/
/*** React components ***/
import BioNameText from "./bio-name__text.jsx";
import Image from "../image/image.jsx";
/*******/

export default function BioName (props) {
    return (
        <div className = {props.class}>
            <Image class = "image image__photo" src = "./src/blocks/image/images/photo.png" alt = "photo"/>
            <BioNameText class = "bio-name__name" text = "roman"/>
            <BioNameText class = "bio-name__surname" text = "Akhmetshin"/>
            <BioNameText class = "bio-name__profession" text = "frontend developer"/>
        </div>
    );
}