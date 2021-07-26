import React from "react";
import SectionTitle from './SectionTitle';
import Pill from './Pill';
import {
    GitIcon,
    JavaScriptIcon,
    ReactIcon,
    TypeScriptIcon,
    NodeIcon,
    LinuxIcon,
    VisualStudioCodeIcon,
    JiraIcon,
    AWSIcon,
    AzureIcon,
    PowerBIIcon
} from './Icons';
import "./Tools.scss";

const Tools = () => {
    return (
        <section>
            <SectionTitle title="Most used tools"/>
            <div className="tools-container">
                <Pill
                    icon={<JavaScriptIcon/>}
                    name="JavaScript"
                />
                <Pill
                    icon={<TypeScriptIcon/>}
                    name="TypeScript"
                />
                <Pill
                    icon={<ReactIcon/>}
                    name="React"
                />
                <Pill
                    icon={<NodeIcon/>}
                    name="Node"
                />
                <Pill
                    icon={<GitIcon/>}
                    name="Git"
                />
                <Pill
                    icon={<VisualStudioCodeIcon/>}
                    name="Visual Studio Code"
                />
                <Pill
                    icon={<LinuxIcon/>}
                    name="Linux"
                />
                <Pill
                    icon={<JiraIcon/>}
                    name="Jira"
                />
                <Pill
                    icon={<AWSIcon/>}
                    name="AWS"
                />
                <Pill
                    icon={<AzureIcon/>}
                    name="Azure"
                />
                <Pill
                    icon={<PowerBIIcon/>}
                    name="Power BI"
                />
            </div>
        </section>
    );
};

export default Tools;