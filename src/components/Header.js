import React from "react";
import "./Header.scss";
import Button from "./Button";
import ThemeIcon from "./ThemeIcon";
import { Logo } from "./Icons";

const Header = () => {
    
    return (
        <header>
            <nav>
                <div id="logo">
                    <a href="/" aria-label="home">
                        <Logo/>
                    </a>
                </div>
                <div>
                    <ThemeIcon/>
                    <ol>
                        <li>
                            <a href="/#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/#experience">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="/#skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="/#contact">
                                Contact
                            </a>
                        </li>
                    </ol>
                    <div>
                        <Button
                            url="/resume.pdf"
                            text="Resume"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;