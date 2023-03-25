import React from "react";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 2.02 - HeaderComponent - Features:
 * 
 *      --> Clearing Code from old Markup.
 * 
 *      --> Applying style class naming.
 * 
 *      --> Refactoring the app.
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
            <h2 className="header--title">{logo}</h2>
            <p className="header--logo">{welcomemsg}</p>
        </section>
    )
}

export default HeaderComponent;