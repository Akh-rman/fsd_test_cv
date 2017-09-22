import React from "react";
/*** styles ***/
import "./bio.scss";
/*********/
/*** React components ***/
import BioName from "../bio-name/bio-name.jsx";
import BioContact from "../bio-contact/bio-contact.jsx";
import BioProfile from "../bio-profile/bio-profile.jsx";
import BioEducation from "../bio-education/bio-education.jsx";
import BioExperience from "../bio-experience/bio-experience.jsx";
import BioSkills from "../bio-skills/bio-skills.jsx";
import BioSoftware from "../bio-software/bio-software.jsx";
/*********/

export default function App (props) {
    return (
        <div className = {props.class}>
            <BioName/>
            <BioProfile class = "bio-profile"/>
            <BioContact/>
            <BioSkills/>
            <BioEducation/>
            <BioExperience/>
            <BioSoftware/>
        </div>
    );
}