import styled from "styled-components"

/**Jose-profile web - version 4.06 - style.components - Features:
 * 
 *      --> writting 'ThirdIcons' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
 */

export const FooterDescription = styled.div`
    display: grid;
    grid-column: 3 / 6;
    place-content: center;
`

export const ThirdIcons = styled.div`
    display: grid;
    grid-column: 8 / 10;
`

export const FooterStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(8,1fr);

    background: linear-gradient(var(--clr-primary-17), var(--clr-primary-15));
    border-top: 3px solid var(--clr-primary-11);
    background-color: var(--clr-primary-15);
    grid-column: container-start / container-end;

    bottom: 0;
    
`

export const HeaderLogo = styled.p`
    color: hsla(22, 98%, 60%, 1);
    font-weight: 700;
    text-transform: capitalize;
    font-size: calc( 0.50rem + 1vw);
`

export const HeaderTitle = styled.h2`
    box-shadow: 0px 2px 0px var(--dark-shadow); /* add box shadow */
    text-decoration: underline 4px solid var(--clr-black); /* add underline */
    text-underline-offset: 4px; /* adjust the distance of the underline from the text */
`

export const HeaderContainer = styled.div`
    display: grid;
    padding: 1.5rem;
    margin-left: 1rem;
`

export const HeaderWrapper = styled.section`
    background: linear-gradient(hsla(220, 98%, 45%, 1), hsla(220, 98%, 65%, 1));
    border-bottom: 3px solid var(hsla(22, 98%, 60%, 1));
    background-color: var(hsla(220, 98%, 45%, 1));
    height: 30vh;  
    grid-column: container-start / container-end;
`

export const LanguagesSpanIcon = styled.span`

`

export const LanguagesSpan = styled.span`

`

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