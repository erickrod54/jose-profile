import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { HeaderContainer, HeaderTitle, HeaderWrapper } from "../style.components";

/**Jose-profile web - version 4.00 - HeaderComponent - Features:
 * 
 *      --> Migrating 'HeaderTitle' styles.
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
                <p className="header--logo">{welcomemsg}</p>
            </HeaderContainer>
        </HeaderWrapper>
    )
}


export default HeaderComponent;