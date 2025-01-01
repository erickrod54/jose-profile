import React from "react";
import { useJoseProfileContext } from "../context";
import QRDev from "./erick.vcard.component";
import styled from "styled-components";

/**Jose-profile web - version 4.03 - FooterComponent - Features:
 * 
 *      --> writting 'FooterDescription'
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const FooterStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(8,1fr);

    background: linear-gradient(var(--clr-primary-17), var(--clr-primary-15));
    border-top: 3px solid var(--clr-primary-11);
    background-color: var(--clr-primary-15);
    grid-column: container-start / container-end;

    bottom: 0;

    div:nth-child(2){
        display: grid;
        grid-column: 3 / 6;
        place-content: center;
    }

    div:nth-child(3){
      grid-column: 7 / 9;
    }

    div[class*=third-icons] img {
       width: 5rem;
       height: 5rem;
    }
    
`

const FooterDescription = styled.div`
    display: grid;
    grid-column: 3 / 6;
    place-content: center;
`

const GitHubImage = styled.div`
    grid-column: 1 / 2;
`

const FooterComponent = () => {

    const { GitHubIcon } = useJoseProfileContext()

    return (
        <FooterStyled>
            <GitHubImage>
                    <a href="https://github.com/erickrod54">
                      {React.cloneElement(GitHubIcon, {style: {height: '5rem', width: '5rem'}})}
                    </a>
            </GitHubImage>
            <FooterDescription>
                <h5>&copy; { new Date().getFullYear()}</h5>
                <span> JP  |  Data Analyst Cognizant  </span>
                <h5>  All Rights reserved</h5>
            </FooterDescription>
            <div>
                <span>Developed by  @erickrod54</span>
                <div className="third-icons">
                    <QRDev />
                </div>
            </div>
        </FooterStyled>
    )
}

export default FooterComponent;
