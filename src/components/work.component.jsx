import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { CompanyTitle, RolTitle, RolTitleContainer, WorkExperienceContainer, WorkExperienceContent, WorkExperienceDescription, WorkExperienceWrapper } from "../style.components";

/**Jose-profile web - version 5.17 - WorkComponent - Features:
 * 
 *      --> Migrating  'WorkExperienceContent'
 * 
 * Notes: at this point RolTitle and 
 * dependant components are migrated
*/


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