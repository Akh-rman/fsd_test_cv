import React from "react";

/*** styles ***/
import "./bio-header.scss";
/*********/

/*** React components ***/
import Image from "../image/image.jsx";
import BioHeaderTitle from "./bio-header__title.jsx";
import BioHeaderLine from "./bio-header__line.jsx";
/*********/

export default function BioHeader (props) {
      return (
          <div className = {props.class}>
              <Image class = {props.imageClass} src = {props.imageSrc} alt = {props.imageAlt}/>
              <BioHeaderTitle class = "bio-header__title" value = "Education"/>
              <BioHeaderLine class = "bio-header__line"/>
          </div>
      );
}