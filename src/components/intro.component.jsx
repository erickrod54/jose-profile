import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { IntroContainer, IntroTitle } from "../style.components";

/**Jose-profile web - version 3.00 - IntroComponent - Features:
 * 
 *      --> Migrating 'IntroTitle' style component
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const IntroComponent = () => {

    const { intro } = useJoseProfileContext();
    console.log('intro data ==>', intro)
    
    const introtitle = intro[0].sectionname;
    const description = intro[0].text;

    return(
        <IntroContainer>
            <IntroTitle>{introtitle}</IntroTitle>
            <p className="intro--para">
                {description}
            </p>
        </IntroContainer>
    )
}

export default IntroComponent;