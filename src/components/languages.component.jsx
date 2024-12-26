import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { LanguageList, LanguagesWrapper } from "../style.components";

/**Jose-profile web - version 3.08 - LanguagesComponent - Features:
 * 
 *      -->  Migrating 'LanguageList' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const LanguageListItem = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    text-transform: capitalize;
    font-weight: 600;
`


const LanguagesComponent = () => {

    const { languages } = useJoseProfileContext()
    console.log('this are the languages ==>', languages)

    const title = languages[0].languagestitle;

    return(
        <LanguagesWrapper>
        <h2 className="">{title}</h2>
        <LanguageList>
        {languages.map((language) => {
                const { id, languagename, icon } = language;

                return(
                    <LanguageListItem key={id}>
                        <li><span className="languages--name">{languagename}</span> - <span>{icon}</span></li>
                    </LanguageListItem>
                )
            })}
        </LanguageList>
    </LanguagesWrapper>
    )
}


export default LanguagesComponent;