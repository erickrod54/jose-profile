import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";


/**Jose-profile web - version 5.09 - WorkComponent - Features:
 * 
 *      --> writting 'RolTitleContainer'
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const WorkExperienceWrapper = styled.section`
    display: grid;
    background: white;
    grid-column: col-start 8 / col-end 6;
    grid-template-rows: repeat(2);
    
    .work-experience--para{
        margin: 1.7rem;
    }
`

const WorkExperienceContainer = styled.article`
    
`

const WorkExperienceDescription = styled.section`

`

const RolTitleContainer = styled.div`

`

const RolTitle = styled.h4`
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

const WorkExperienceContent = styled.section`
    font-size: calc(.7rem + 0.637vw);
    line-height: 2.5;
    margin: 1.7rem;
`

const CompanyTitle = styled(RolTitle)`
    font-size: calc( 0.50rem + 0.6vw);
    color: hsla(220, 98%, 30%, 1);
`

const TimePeriod = styled(RolTitle)`
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: hsla(188, 98%, 30%, 1);
`

const ExperienceItem = styled.p`

`

const WorkComponent = () => {
    
    const { workExperience } = useJoseProfileContext();
    console.log('workExperience data ==>', workExperience);

    return(
        <WorkExperienceWrapper>
            {workExperience.map((rol) => {
                const { id, roltitle, company, experience1, experience2, experience3, year } = rol;
                
                return(
                    <WorkExperienceContainer key={id}>
                        <WorkExperienceDescription key={id}>
                        <RolTitleContainer>
                            <RolTitle><span>rol - </span>{roltitle}</RolTitle>
                        </RolTitleContainer>
                        <WorkExperienceContent>
                            <CompanyTitle ><span>company - </span>{company === '' ? undefined : company}</CompanyTitle>
                            <ExperienceItem  >{experience1}</ExperienceItem>
                            <ExperienceItem  >{experience2}</ExperienceItem>
                            { experience3 ? <ExperienceItem  >{experience3}</ExperienceItem> : null}
                            <TimePeriod >Period: {year}</TimePeriod>
                        </WorkExperienceContent>
                        
                        <hr/>
                        </WorkExperienceDescription>
                    </WorkExperienceContainer>
                )
            })}
        </WorkExperienceWrapper>
    )
}


export default WorkComponent;