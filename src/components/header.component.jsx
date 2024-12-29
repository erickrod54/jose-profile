import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { HeaderWrapper } from "../style.components";

/**Jose-profile web - version 3.18 - HeaderComponent - Features:
 * 
 *      --> writting 'HeaderContainer' styles.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HeaderContainer = styled.div`
  display: grid;
  padding: 1.5rem;
  margin-left: 1rem;
`

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