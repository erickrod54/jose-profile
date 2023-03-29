import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 2.17 - App js - Features:
 * 
 *      --> Wrapping 'LanguagesComponent' with style 
 *         'LanguagesWrapper'.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const LanguagesComponent = () => {

    const { languages } = useJoseProfileContext()
    console.log('this are the languages ==>', languages)

    const title = languages[0].languagestitle;

    return(
        <LanguagesWrapper id="languages">
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

const LanguagesWrapper = styled.section`

    .languages--list--item{
        text-transform: capitalize;
        font-weight: 600;
    }

    .languages--list--item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }
`

export default LanguagesComponent;