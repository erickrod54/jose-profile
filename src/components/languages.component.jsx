import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { LanguageList, LanguageListItem, LanguagesWrapper } from "../style.components";

/**Jose-profile web - version 3.09 - LanguagesComponent - Features:
 * 
 *      -->  Migrating 'LanguageListItem' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


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