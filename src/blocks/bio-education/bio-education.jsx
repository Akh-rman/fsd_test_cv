import React from "react";

import "./bio-education.scss";
import "./bio-education__main.scss";

import BioItem from "../bio-item/bio-item.jsx";
import BioHeader from "../bio-header/bio-header.jsx";

export default function BioEducation (props) {
    let data = [
        {
            header: "MASTER DEGREE",
            date: "// Feb 2011 - Jun 2014",
            main: {
                header: "UNIVERSITY NAME",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." +
                    " Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
                " Donec quam felis, ultricies nec, pellentesque.",
            }
        }
    ];
    return (
        <div className = "bio-education">
            <BioHeader class = "bio-header" imageClass = "image image__education" imageSrc = "./src/blocks/image/images/education.svg" headerText = "Education"/>
            <div className = "bio-education__main">
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_blue" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_blue" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_blue" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
                <BioItem nameClass = "bio-item-header__name bio-item-header__name_blue" nameText = {data[0].header} dateText = {data[0].date} mainHeaderText = {data[0].main.header} mainText = {data[0].main.text}/>
            </div>
        </div>
    );
}