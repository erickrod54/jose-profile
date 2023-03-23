import React from "react";
import { useJoseProfileContext } from "../context";
import QRDev from "./erick.vcard.component";

/**Jose-profile web - version 2.02 - FooterComponent - Features:
 * 
 *      --> Clearing code from old Markup.
 * 
 *      --> Refactoring the app.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const FooterComponent = () => {

    const { GitHubIcon } = useJoseProfileContext()

    return (
        <section id='footer'>
            <div>
                    <a href="https://github.com/erickrod54">
                      {React.cloneElement(GitHubIcon, {style: {height: '5rem', width: '5rem'}})}
                    </a>
            </div>
            <div>
                <h5>&copy; { new Date().getFullYear()}</h5>
                <span> JP  |  Data Analyst Cognizant  </span>
                <h5>  All Rights reserved</h5>
            </div>
            <div>
                <span>Developed by  @erickrod54</span>
                <div className="third-icons">
                    <QRDev />
                </div>
            </div>
        </section>
    )
}

export default FooterComponent;
