import React from "react";

import "./bio-text.scss";
import "./bio-text_bold.scss";

export default class BioText extends React.Component {
    constructor(props) {
        super(props);

        this.text = this.props.text;
    }

    createText() {
        return {__html: this.props.text}
    }

    render() {
        return (
            <p className = {this.props.class} dangerouslySetInnerHTML = {this.createText()}></p>
        );
    }
}