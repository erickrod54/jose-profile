import React from "react";
import { IntroComponent, WorkComponent, SkillsComponent, LanguagesComponent } from './index.components'

/**Jose-profile web - version 2.02 - ResumeComponent - Features:
 * 
 *      --> Building and placing Components for Resume.
 * 
 *      --> Refactoring the app.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const ResumeComponent = () => {

    return(
        <section id='resume'>
            <IntroComponent />
            <WorkComponent />
            <SkillsComponent />
            <LanguagesComponent /> 
        </section>
    )
}

export default ResumeComponent;