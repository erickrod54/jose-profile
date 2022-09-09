import React from "react";
import styled from "styled-components";
import { BsGithub } from 'react-icons/bs'
import QRComponent from "./vcard.component";
import QRDev from "./erick.vcard.component";

/**Jose-profile web - version 2 - Footer 
 * Component - Features:
 * 
 *      --> Importing and placing
 *         'QRComponent' my contact.
 * 
 *      --> Importing and placing 'QRDev'
 * 
 *      --> Re-styling  'Wrapper'
 * 
 * Notes: By this version is set in this 
 * Component.
*/

const Footer = () => {

    return(
    <Wrapper>
        <ul>
            <li>
            <QRComponent />
            </li>
            <li>
            <h5>&copy; { new Date().getFullYear()}</h5>
            <span> JP  |  Data Analyst Cognizant  </span>
            <h5>  All Rights reserved</h5>    
            </li>
            <li className="third">
            <span>Developed by  @erickrod54</span>
            <div className="third-icons">
            <a href="https://github.com/erickrod54">
            <BsGithub />
            </a>
            <QRDev />    
            </div>
            </li>
        </ul>     
    </Wrapper>
    )
}


const Wrapper = styled.footer`
    background-color: var(--clr-primary-15);
    padding: 1rem;
    color: var(--clr-white);

    ul{
        display: flex;
        justify-content: space-around;
    }

    .third{
        display: flex;
        flex-flow: column;
    }
    .third-icons{
        margin-top: 1rem;
        padding: .5rem;
        display: flex;
    }

    svg{
        width: 4rem;
        height: 4rem;
    }

    svg:hover{
        background-color: var(--clr-primary-12);
        border-radius: 50%;
    }
`

export default Footer;

/**
 * 
 * <ul>
            <li>
            <QRComponent />
            </li>
            <li>
            <span>Developed by  @erickrod54</span>
            <a href="https://github.com/erickrod54">
                <BsGithub />
            </a>
            </li>
            <li>
            <QRDev />    
            </li>
        </ul>

        <div>
            <h5>&copy; { new Date().getFullYear()}</h5>
            <span> JP  |  Data Analyst Cognizant  </span>
            <h5>  All Rights reserved</h5>
        </div>
 */