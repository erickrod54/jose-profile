import React from "react";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 2.02 - IntroComponent - Features:
 * 
 *      --> Clearing Code from old Markup.
 * 
 *      --> Refactoring the app.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const IntroComponent = () => {

    const { intro } = useJoseProfileContext();
    console.log('intro data ==>', intro)
    
    const introtitle = intro[0].sectionname;
    const description = intro[0].text;

    return(
        <section id='intro'>
            <h2 className="intro--title">{introtitle}</h2>
            <p className="intro--para">
                {description}
            </p>
        </section>
    )
}

export default IntroComponent;