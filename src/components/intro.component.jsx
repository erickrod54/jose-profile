import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { IntroContainer } from "../style.components";

/**Jose-profile web - version 2.20 - IntroComponent - Features:
 * 
 *      --> writting 'IntroTitle' style component
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const IntroTitle = styled.h2`
   color: var(--clr-primary-13);
   font-weight: 700;
   text-transform: capitalize;
   font-size: var(--font-size-secondary-title);
`

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