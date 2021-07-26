import React from "react";
import "./Pill.scss";

const Pill = ({icon, name}) => {
    return (
        <div className="pill">
            <div className="pill-icon">
                {icon}
            </div>
            <div className="pill-text">
                {name}
            </div>
        </div>
    );
};

export default Pill;