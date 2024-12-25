import React from "react";
import { useJoseProfileContext } from "../context";
import { DescriptionWrapper, IntroContainer, IntroTitle } from "../style.components";

/**Jose-profile web - version 3.03 - IntroComponent - Features:
 * 
 *      --> Clearing unsed imports
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
            <DescriptionWrapper>
                {description}
            </DescriptionWrapper>
        </IntroContainer>
    )
}

export default IntroComponent;