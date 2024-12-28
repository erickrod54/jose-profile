import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { LanguageList, LanguageListItem, LanguagesSpan, LanguagesWrapper, ListItem } from "../style.components";

/**Jose-profile web - version 3.14 - LanguagesComponent - Features:
 * 
 *      -->  writting 'LanguagesSpanIcon' styles 
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const LanguagesSpanIcon = styled.span`

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
                        <ListItem>
                            <LanguagesSpan>{languagename}</LanguagesSpan> - <span>{icon}</span>
                        </ListItem>
                    </LanguageListItem>
                )
            })}
        </LanguageList>
    </LanguagesWrapper>
    )
}


export default LanguagesComponent;