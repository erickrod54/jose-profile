import React from "react";
import { useJoseProfileContext } from "../context";
import QRDev from "./erick.vcard.component";
import styled from "styled-components";
import { FooterDescription, FooterStyled, GitHubImage, ThirdIcons } from "../style.components";

/**Jose-profile web - version 4.08 - FooterComponent - Features:
 * 
 *      --> Migrating 'GitHubImage' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

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
            <ThirdIcons>
                <span>Developed by  @erickrod54</span>
                <div className="third-icons">
                    <QRDev />
                </div>
            </ThirdIcons>
        </FooterStyled>
    )
}

export default FooterComponent;
