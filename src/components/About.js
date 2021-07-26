import React from "react";
import SectionTitle from './SectionTitle';
import "./About.scss";

const About = () => {
    return (
        <section>
            <SectionTitle title="About"/>
            <div className="about-wrapper">
                <div>
                    <p>I'm from Barcelona and I'm around <code className="green-text">`echo $(( `date +%Y` - 1992))`</code> years old.</p>
                    <p>I enjoy creating things that live on the internet. My passion started as far as I have memory since I wanted as a kid to create things to help others and also being self-challenged. I come from a back-end background. Always curious and passionate about understanding more about everything. As I wanted to learn more abount front-end, I've decided to make this website from scratch using Gatsby.</p>
                </div>
                <div className="profile-picture">
                    <picture>
                        <source srcset="https://raw.githubusercontent.com/Nerconer/Nerconer.github.io/master/images/perfil.png"/>
                        <img src="https://raw.githubusercontent.com/Nerconer/Nerconer.github.io/master/images/perfil.png" alt="profile-picture"/>
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default About;