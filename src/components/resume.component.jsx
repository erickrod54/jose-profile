import React from "react";
import { IntroComponent, WorkComponent, SkillsComponent, LanguagesComponent } from './index.components'
import styled from "styled-components";
import { ResumeContainer } from "../style.components";

/**Jose-profile web - version 4.11 - ResumeComponent - Features:
 * 
 *      --> Migrating 'ResumeContainers'
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const ResumeComponent = () => {

    return(
        <ResumeContainer>
            <IntroComponent />
            <WorkComponent />
            <SkillsComponent />
            <LanguagesComponent /> 
        </ResumeContainer>
    )
}

export default ResumeComponent;