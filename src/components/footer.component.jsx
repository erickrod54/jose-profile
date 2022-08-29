import React from "react";
import styled from "styled-components";

/**Jose-profile web - version 1 - Footer 
 * Component - Features:
 * 
 *      --> Building the 'Footer' Component
 *          
 * 
 * Notes: This Component is part of the
 * HomePage Component.
*/

const Footer = () => {

    return(
    <Wrapper>
        <div>
            <h5>&copy; { new Date().getFullYear()}</h5>
            <span> JP  |  Data Analyst Cognizant  </span>
            <h5>  All Rights reserved</h5>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--clr-primary-15);
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var( --clr-white);
        padding: 1rem;
        margin: 0 auto;
    }
`

export default Footer;