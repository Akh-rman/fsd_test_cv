import React from "react";
/*** styles ***/
import "./image.scss";
import "./image__photo.scss";
import "./image__contact.scss";
import "./image__education.scss";
import "./image__expirience.scss";
import "./image__profile.scss";
import "./image__skills.scss";
import "./image__software.scss";
/************/
/*** images ***/
import "./images/photo.png";
import "./images/contact.svg";
import "./images/education.svg";
import "./images/expirience.svg";
import "./images/profile.svg";
import "./images/skills.svg";
import "./images/software.svg";
/************/

export default function Image (props) {
    return (
        <img className = {props.class} src = {props.src} alt = {props.alt}/>
    );
}