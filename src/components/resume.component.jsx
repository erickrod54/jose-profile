import React from "react";
import { IntroComponent, WorkComponent, SkillsComponent, LanguagesComponent } from './index.components'
import styled from "styled-components";

/**Jose-profile web - version 4.10 - ResumeComponent - Features:
 * 
 *      --> writting 'ResumeContainers'
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const ResumeContainer = styled.section`
    margin: 1rem;
    padding: 1rem;
    display: grid;
    grid-column: container-start / container-end;
`

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