import React from "react";
import SectionTitle from './SectionTitle';
import Button from './Button';
import "./Contact.scss";

const Contact = () => {
    return (
        <section>
            <SectionTitle title="Contact"/>
            <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try, my best to get back to you!</p>
            <Button
                url="mailto:funnynike@hotmail.com"
                text="Say Hello"
            />
        </section>
    );
};

export default Contact;