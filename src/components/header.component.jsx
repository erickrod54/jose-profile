import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { HeaderContainer, HeaderWrapper } from "../style.components";

/**Jose-profile web - version 3.20 - HeaderComponent - Features:
 * 
 *      --> writting 'HeaderTitle' styles.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HeaderTitle = styled.h2`
  box-shadow: 0px 2px 0px var(--dark-shadow); /* add box shadow */
  text-decoration: underline 4px solid var(--clr-black); /* add underline */
  text-underline-offset: 4px; /* adjust the distance of the underline from the text */
`

const HeaderComponent = () => {

    const { headerData } = useJoseProfileContext();

    console.log('headerData ==>', headerData)
    
    const logo = headerData[0].sectionname;
    const welcomemsg = headerData[0].text;

    return(
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderTitle>{logo}</HeaderTitle>
                <p className="header--logo">{welcomemsg}</p>
            </HeaderContainer>
        </HeaderWrapper>
    )
}


export default HeaderComponent;