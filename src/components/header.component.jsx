import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { HeaderContainer, HeaderLogo, HeaderTitle, HeaderWrapper } from "../style.components";

/**Jose-profile web - version 4.02 - HeaderComponent - Features:
 * 
 *      --> Migrating 'HeaderLogo' styles.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

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