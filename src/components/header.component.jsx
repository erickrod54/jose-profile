import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { HeaderContainer, HeaderWrapper } from "../style.components";

/**Jose-profile web - version 3.19 - HeaderComponent - Features:
 * 
 *      --> Migrating 'HeaderContainer' styles.
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
                <h2 className="header--title">{logo}</h2>
                <p className="header--logo">{welcomemsg}</p>
            </HeaderContainer>
        </HeaderWrapper>
    )
}


export default HeaderComponent;