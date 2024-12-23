import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { IntroContainer } from "../style.components";

/**Jose-profile web - version 2.19 - IntroComponent - Features:
 * 
 *      --> Migrating 'IntroContainer' style component
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
            <h2 className="intro--title">{introtitle}</h2>
            <p className="intro--para">
                {description}
            </p>
        </IntroContainer>
    )
}

export default IntroComponent;