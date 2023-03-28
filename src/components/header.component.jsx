import React from "react";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 2.07 - HeaderComponent - Features:
 * 
 *      --> Wrapping title and logo using 'header--container'.
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
        <section id='header'>
            <div className="header--container">
                <h2 className="header--title">{logo}</h2>
                <p className="header--logo">{welcomemsg}</p>
            </div>
        </section>
    )
}

export default HeaderComponent;