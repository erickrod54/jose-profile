import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { HeaderContainer, HeaderTitle, HeaderWrapper } from "../style.components";

/**Jose-profile web - version 4.01 - HeaderComponent - Features:
 * 
 *      --> writting 'HeaderLogo' styles.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HeaderLogo = styled.p`
    color: hsla(22, 98%, 60%, 1);
    font-weight: 700;
    text-transform: capitalize;
    font-size: calc( 0.50rem + 1vw);
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
                <HeaderLogo>{welcomemsg}</HeaderLogo>
            </HeaderContainer>
        </HeaderWrapper>
    )
}


export default HeaderComponent;