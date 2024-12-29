import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";


/**Jose-profile web - version 3.16 - HeaderComponent - Features:
 * 
 *      --> writting 'HeaderWrapper' styles.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HeaderWrapper = styled.section`
    background: linear-gradient(hsla(220, 98%, 45%, 1), hsla(220, 98%, 65%, 1));
    border-bottom: 3px solid var(hsla(22, 98%, 60%, 1));
    background-color: var(hsla(220, 98%, 45%, 1));
    height: 30vh;  
    grid-column: container-start / container-end;
`

const HeaderComponent = () => {

    const { headerData } = useJoseProfileContext();

    console.log('headerData ==>', headerData)
    
    const logo = headerData[0].sectionname;
    const welcomemsg = headerData[0].text;

    return(
        <HeaderWrapper>
            <div className="header--container">
                <h2 className="header--title">{logo}</h2>
                <p className="header--logo">{welcomemsg}</p>
            </div>
        </HeaderWrapper>
    )
}


export default HeaderComponent;