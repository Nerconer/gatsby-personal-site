import React from "react";
import "./Button.scss";

const Button = ({url, text}) => {
    return (
        <a className="button" href={url}>{text}</a>
    );
};

export default Button;