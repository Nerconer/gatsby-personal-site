import React, { useEffect, useState } from "react";
import SectionTitle from './SectionTitle';
import "./Experience.scss";

const TAB_PREFIX = 'tab-';
const PANEL_PREFIX = 'panel-';

interface IExperience {
    companyName: string;
    companyUrl: string;
    role: string;
    duration: {
        from: string;
        to: string;
    };
    tasks: string[];
}

const experienceList: IExperience[] = [
    {
        companyName: 'Sopra Steria',
        companyUrl: 'https://www.soprasteria.com',
        role: 'Engineer',
        duration: {
            from: 'June 2017',
            to: 'Present'
        },
        tasks: [
            'Developing a machine learning supported chatbot framework. Using an angile methodolody and covering most life cycle tasks of the project, including the analysis and the improvement of the bots.',
            'Development of a chatbot as a proof of concept (PoC) using Dialogflow/AWS Api Gateway/AWS Lambda as stack.',
            'Development of an API REST using AWS and Serverless.',
            'Design and development of unit tests using JUnit and Selenium.',
            'Maintenance of a banking portal using JEE.',
            'Development of international banking web applications using a bank-owned (ABSIS) framework based on Spring.',
        ]
    },
    {
        companyName: 'PM Farma',
        companyUrl: 'https://www.pmfarma.es/',
        role: 'Web Developer',
        duration: {
            from: 'January 2015',
            to: 'October 2015'
        },
        tasks: [
            'Creation of a new intranet for the employees of the company.',
            'Development of data migration script from the old database to the new one.'
        ]
    }
]

const Experience = () => {

    // Handles current selected tab.
    const [selectedTab, setSelectedTab] = useState(0);

    const hidePanel = (tabIndex) => {
        document.getElementById(TAB_PREFIX + tabIndex).removeAttribute('class');
        document.getElementById(PANEL_PREFIX + tabIndex).style.display = 'none';
    };

    const handleSelectedTab = (newTab = 0) => {
        hidePanel(selectedTab);

        document.getElementById(TAB_PREFIX + newTab).className = 'selectedTab';
        document.getElementById(PANEL_PREFIX + newTab).style.display = 'block';

        setSelectedTab(newTab);
    };

    useEffect(() => {
        experienceList.forEach((element, index) => {
            if (index != 0) {
                hidePanel(index);
            }
        }) 
        handleSelectedTab();
    }, []);

    return (
        <section>
            <SectionTitle title="Where I've worked"/>
            <div >
                <div id="tabList">
                    {experienceList.map((experience, index) => {
                        return (
                            <button 
                                id={TAB_PREFIX + index}
                                onClick={() => handleSelectedTab(index)}
                            >
                                <span>{experience.companyName}</span>
                            </button>
                        );
                    })}
                </div>
                <div className="jobDescription">
                    {experienceList.map((experience, index) => {
                        return (
                            <div id={PANEL_PREFIX + index}>
                                <h3>
                                    <span>{experience.role}</span>
                                    <span>
                                    &nbsp;@&nbsp;
                                        <a href={experience.companyUrl} target="_blank" rel="noreferrer">{experience.companyName}</a>
                                    </span>
                                </h3>
                                <p>{experience.duration.from + ' - ' + experience.duration.to}</p>
                                <div>
                                    <ul>
                                        {experience.tasks.map(task => {
                                            return (
                                                <li>{task}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;