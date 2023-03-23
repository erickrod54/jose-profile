import React from "react";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 2.02 - App js - Features:
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

const LanguagesComponent = () => {

    const { languages } = useJoseProfileContext()
    console.log('this are the languages ==>', languages)

    const title = languages[0].languagestitle;

    return(
        <section id="languages">
        <h2 className="languages--title">{title}</h2>
        <section className="languages--list--item">
        {languages.map((language) => {
                const { id, languagename, icon } = language;

                return(
                    <ul key={id}>
                        <li><span className="languages--name">{languagename}</span> - <span>{icon}</span></li>
                    </ul>
                )
            })}
        </section>
    </section>
    )
}

export default LanguagesComponent;