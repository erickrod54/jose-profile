import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 3.05 - LanguagesComponent - Features:
 * 
 *      --> writting 'LanguageListItem' styles
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

const LanguageListItem = styled.section`
    margin: 1rem;
    padding: 1rem;
    font-size:calc(.7rem + 0.637vw);
    line-height:2rem;
`


const LanguagesComponent = () => {

    const { languages } = useJoseProfileContext()
    console.log('this are the languages ==>', languages)

    const title = languages[0].languagestitle;

    return(
        <LanguagesWrapper>
        <h2 className="">{title}</h2>
        <LanguageListItem>
        {languages.map((language) => {
                const { id, languagename, icon } = language;

                return(
                    <ul key={id}>
                        <li><span className="languages--name">{languagename}</span> - <span>{icon}</span></li>
                    </ul>
                )
            })}
        </LanguageListItem>
    </LanguagesWrapper>
    )
}


export default LanguagesComponent;