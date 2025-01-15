import styled from "styled-components"
import tw from "twin.macro";

/**Jose-profile web - version 6.06 - style.components - Features:
 * 
 *      --> Refactoring 'LanguageListItem' to tailwind 
 * 
 * Notes: All these are clean files in data, directory and 
 * files
 */

export const HomePageContainer = styled.div`
    display: grid;
    grid-template-columns: 
        [container-start] 1fr 
        [center-start] repeat(8, [col-start] minmax(min-content, 11rem) [col-end]) 
        [center-end] 1fr [container-end];
    grid-template-rows: 30vh repeat(3, min-content);
    min-height: 100vh;
    max-width: 100vw;
    padding: 1rem;
    gap: 1rem;

    /* Tablet (iPad and below) */
    @media (max-width: 1024px) {
        grid-template-columns: [container-start] 1fr [container-end]; /* Single column layout */
        grid-template-rows: auto;
        padding: 1rem;
    }

    /* Mobile (Phones) */
    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export const ExperienceItem = styled.p`

`

export const WorkExperienceContent = styled.section`
    font-size: calc(.7rem + 0.637vw);
    line-height: 2.5;
    margin: 1.7rem;
    `

export const RolTitle = styled.h4`
    text-transform: capitalize;
    font-weight: 700;  
    font-size: calc( 0.50rem + 1vw);
    box-shadow: 0px 2px 0px 0 5px 15px rgba(0, 0, 0, 0.2); /* add box shadow */
    text-decoration: underline 4px solid #222; /* add underline */
    text-underline-offset: 4px; 
    margin: 1rem;
    padding: 1rem;/* adjust the distance of the underline from the text */
    color: hsla(22, 98%, 60%, 1);
    `
export const TimePeriod = styled(RolTitle)`
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: hsla(188, 98%, 30%, 1);
`

export const CompanyTitle = styled(RolTitle)`
    font-size: calc( 0.50rem + 0.6vw);
    color: hsla(220, 98%, 30%, 1);
    `

export const RolTitleContainer = styled.div`

`

export const WorkExperienceDescription = styled.section`

`

export const WorkExperienceContainer = styled.article`
    
`

export const WorkExperienceWrapper = styled.section`
    display: grid;
    background: white;
    grid-column: col-start 8 / col-end 6;
    grid-template-rows: repeat(2);

     /* Responsive - Single Column Before 1024px */
     @media (max-width: 1024px) {
        grid-column: container-start / container-end;
        grid-template-rows: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const SkillsItem = styled.li`
    font-size: calc(.7rem + 0.637vw);
    line-height:  2rem;
`

export const SkillsListContainer = styled.div`

`

export const SkillsList = styled.ul`
    margin: 1rem;
    padding: 1rem;
    font-size: calc(.7rem + 0.637vw);
    line-height: 2rem;
`

export const SkillsTitle = styled.h2`
    margin: 1rem;
    padding: 1rem;
    color: hsla(22, 98%, 60%, 1);
    font-weight: 700;
    text-transform: capitalize;
    font-size: calc( 0.50rem + 1vw);
    box-shadow: 0px 2px 0px 0 5px 15px rgba(0, 0, 0, 0.2); /* add box shadow */
    text-decoration: underline 4px solid #222; /* add underline */
    text-underline-offset: 4px; /* adjust the distance of the underline from the text */
`

export const SkillsContainer = styled.section`
    display: grid;
    margin-top: 1rem;
    background-color: white;
    grid-column: col-start 4 / col-end 6;  
    
        /* Responsive - Single Column */
        @media (max-width: 1024px) {
        grid-column: container-start / container-end;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ResumeContainer = styled.section`
    margin: 1rem;
    padding: 1rem;
    display: grid;
    grid-column: container-start / container-end;

        /* Responsive - Ensure Full Width */
        @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const GitHubImage = styled.div`
    grid-column: 1 / 2;
`

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
    ${tw`grid grid-cols-3 grid-rows-1 capitalize font-semibold`}	

`

export const LanguageList = styled.section`
    ${tw`leading-[2.2rem] m-4 p-4 text-[calc(.7rem+0.637vw)]`}	
`

export const LanguagesWrapper = styled.section`
    display: grid;
    margin-top: 1rem;
    padding: 1rem;
    grid-column: col-start 2 / col-end 3;
    background: white;
    width: 40rem;

        /* Responsive - Single Column */
        @media (max-width: 1024px) {
        grid-column: container-start / container-end;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const DescriptionWrapper = styled.p`
    ${tw`leading-[2.2rem] m-4 p-4 text-[calc(.7rem+0.637vw)]`}	
`

export const IntroTitle = styled.h2`
   color: var(--clr-primary-13);
   margin: 2rem;
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

        /* Responsive - Single Column */
        @media (max-width: 1024px) {
        grid-column: container-start / container-end;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`	

