import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { LanguageList, LanguageListItem, LanguagesWrapper } from "../style.components";

/**Jose-profile web - version 3.10 - LanguagesComponent - Features:
 * 
 *      -->  Migrating 'ListItem' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const ListItem = styled.li`

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
                        <ListItem><span className="languages--name">{languagename}</span> - <span>{icon}</span></ListItem>
                    </LanguageListItem>
                )
            })}
        </LanguageList>
    </LanguagesWrapper>
    )
}


export default LanguagesComponent;