import React from "react";
import { GithubIcon, LinkedinIcon } from './Icons';
import "./SocialList.scss";

const SocialList = () => {
    return (
        <div className="header-social">
            <ul>
                <li>
                     <GithubIcon/>
                </li>
                <li>
                    <LinkedinIcon/>
                </li>
            </ul>
        </div>
    );
};

export default SocialList;