import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";


/**Jose-profile web - version 2.15 - HeaderComponent - Features:
 * 
 *      --> Wrapping 'HeaderComponent' with style 
 *         'HeaderWrapper'.
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
        <HeaderWrapper id='header'>
            <div className="header--container">
                <h2 className="header--title">{logo}</h2>
                <p className="header--logo">{welcomemsg}</p>
            </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.section`
    
    .header--container{
        display: grid;
        padding: 1.5rem;
        margin-left: 1rem;
    }

    .header--title {
        color: var(--clr-white);
        font-weight: 500;
        font-size: var(--font-size-title);
        width: fit-content;
    }
`

export default HeaderComponent;