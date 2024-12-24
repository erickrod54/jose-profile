import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { IntroContainer, IntroTitle } from "../style.components";

/**Jose-profile web - version 3.01 - IntroComponent - Features:
 * 
 *      --> writting 'DescriptionWrapper' style component
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const DescriptionWrapper = styled.p`
    line-height: 1.5rem;
    margin: 1rem;
    padding: 1rem;
    font-size: calc(.7rem + 0.637vw);
`

const IntroComponent = () => {

    const { intro } = useJoseProfileContext();
    console.log('intro data ==>', intro)
    
    const introtitle = intro[0].sectionname;
    const description = intro[0].text;

    return(
        <IntroContainer>
            <IntroTitle>{introtitle}</IntroTitle>
            <DescriptionWrapper>
                {description}
            </DescriptionWrapper>
        </IntroContainer>
    )
}

export default IntroComponent;