import React from "react";

import "./bio-experience.scss";

import BioItem from "../bio-item/bio-item.jsx";
import BioHeader from "../bio-header/bio-header.jsx";

export default function BioExperience (props) {
    let data = [
        {
            header: "COMPANY NAME",
            date: "// Feb 2011 - Jun 2014",
            main: {
                header: "YOUR JOB HERE",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." +
                " Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
                " Donec quam felis, ultricies nec, pellentesque.",
            }
        }
    ];

    return (
        <div className = "bio-experience">
            <BioHeader class = "bio-header" imageClass = "image image__experience" imageSrc = "./src/blocks/image/images/experience.svg" headerText = "Experience"/>
            <div className = "bio-education__main">
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_black" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_black" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_black" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_black" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
            </div>
        </div>
    );
}