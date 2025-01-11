import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { RolTitleContainer, WorkExperienceContainer, WorkExperienceDescription, WorkExperienceWrapper } from "../style.components";


/**Jose-profile web - version 5.15 - WorkComponent - Features:
 * 
 *      --> Migrating  'RolTitle'
 * 
 * Notes: error:
 * 
 *  Line 22:29:  'RolTitle' is not defined  no-undef
 *  Line 27:27:  'RolTitle' is not defined  no-undef
 *  Line 52:30:  'RolTitle' is not defined 
 * 
 * while dependant components are migrated
*/


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