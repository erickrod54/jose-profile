import styled from "styled-components"

/**Jose-profile web - version 3.11 - style.components - Features:
 * 
 *      --> writting 'ListItem' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
 */

export const ListItem = styled.li`

`

export const LanguageListItem = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    text-transform: capitalize;
    font-weight: 600;
`

export const LanguageList = styled.section`
    margin: 1rem;
    padding: 1rem;
    font-size:calc(.7rem + 0.637vw);
    line-height:2rem;
`

export const LanguagesWrapper = styled.section`
    display: grid;
    margin-top: 1rem;
    padding: 1rem;
    grid-column: col-start 4 / col-end 6;
    background: white;
    width: 40rem;
`

export const DescriptionWrapper = styled.p`
    line-height: 1.5rem;
    margin: 1rem;
    padding: 1rem;
    font-size: calc(.7rem + 0.637vw);
`

export const IntroTitle = styled.h2`
   color: var(--clr-primary-13);
   font-weight: 700;
   text-transform: capitalize;
   font-size: var(--font-size-secondary-title);
`

export const IntroContainer = styled.section`
    display: grid;
    width: 30rem;
    height: fit-content;
    grid-column: center-start / col-end 3;
    grid-template-rows: repeat(2);
    background: white;
`