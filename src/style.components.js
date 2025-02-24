import styled from "styled-components"
import tw from "twin.macro";

/**Jose-profile web - version 6.19 - style.components - Features:
 * 
 *      --> Refactoring 'WorkExperienceContent' styles
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
    ${tw`text-[calc(.7rem+0.637vw)] leading-[2.5] m-[1.7rem]`}	
    `

export const RolTitle = styled.h4`
    ${tw`capitalize font-bold text-[calc(0.50rem+1vw)] shadow-[0px_2px_15px_rgba(0,0,0,0.2)] underline decoration-4 decoration-[#222] underline-offset-4 m-4 p-4 text-orange-500`}	
    `

export const TimePeriod = styled(RolTitle)`
    ${tw`m-0 p-0 no-underline text-cyan-800`}	

`

export const CompanyTitle = styled(RolTitle)`
    ${tw`text-[calc(0.50rem+0.6vw)] text-blue-800`}	
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
    ${tw`text-[calc(0.7rem+0.637vw)] leading-8`}	

`

export const SkillsListContainer = styled.div`

`

export const SkillsList = styled.ul`
    ${tw`m-4 p-4 text-[calc(0.7rem+0.637vw)] leading-8`}	
`

export const SkillsTitle = styled.h2`
    ${tw`m-4 p-4 text-orange-600 font-bold capitalize text-[calc(0.50rem+1vw)] shadow-[0px_2px_15px_rgba(0,0,0,0.2)] underline decoration-4 decoration-[#222] underline-offset-4`}	
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
    ${tw`grid col-start-3 col-end-6 place-content-center`}	

`

export const ThirdIcons = styled.div`
    ${tw`grid col-start-8 col-end-10`}	

`

export const FooterStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(8,1fr);

    background: linear-gradient(hsla(220, 98%, 65%, 1), hsla(220, 98%, 45%, 1));
    border-top: 3px solid hsla(22, 98%, 45%, 1);
    background-color: hsla(220, 98%, 45%, 1);
    grid-column: container-start / container-end;

    bottom: 0;
    
`

export const HeaderLogo = styled.p`
    ${tw`text-[hsla(22,98%,60%,1)] font-bold capitalize text-[calc(0.50rem+1vw)]`}	
`

export const HeaderTitle = styled.h2`
    box-shadow: 0px 2px 0px var(--dark-shadow); /* add box shadow */
    text-decoration: underline 4px solid var(--clr-black); /* add underline */
    text-underline-offset: 4px; /* adjust the distance of the underline from the text */
`

export const HeaderContainer = styled.div`
    ${tw`grid p-6 ml-4`}	

`
export const HeaderWrapper = styled.section`
    ${tw`bg-[linear-gradient(hsla(220,98%,45%,1),hsla(220,98%,65%,1))] border-b-[3px] border-[hsla(22,98%,60%,1)] h-[30vh] col-span-full`}	

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

