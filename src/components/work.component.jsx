import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";
import { CompanyTitle,
         ExperienceItem,
         RolTitle,
         RolTitleContainer,
         TimePeriod,
         WorkExperienceContainer, WorkExperienceContent, WorkExperienceDescription, WorkExperienceWrapper } from "../style.components";

/**Jose-profile web - version 5.19 - WorkComponent - Features:
 * 
 *      --> Migrating  'ExperienceItem'
 * 
 * Notes: at this point RolTitle and 
 * dependant components are migrated
*/

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