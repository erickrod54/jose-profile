import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";

/**Jose-profile web - version 2.18 - IntroComponent - Features:
 * 
 *      --> Wrrritng 'IntroContainer' style component
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const IntroContainer = styled.section`
    display: grid;
    width: 30rem;
    height: fit-content;
    grid-column: center-start / col-end 3;
    grid-template-rows: repeat(2);
    background: white;
`

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