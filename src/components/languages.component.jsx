import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 3.04 - LanguagesComponent - Features:
 * 
 *      --> writting 'LanguagesWrapper' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const LanguagesWrapper = styled.section`
     display: grid;
     margin-top: 1rem;
     padding: 1rem;
     grid-column: col-start 4 / col-end 6;
     background: white;
     width: 40rem;
`

const LanguagesComponent = () => {

    const { languages } = useJoseProfileContext()
    console.log('this are the languages ==>', languages)

    const title = languages[0].languagestitle;

    return(
        <LanguagesWrapper>
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
    </LanguagesWrapper>
    )
}


export default LanguagesComponent;