import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";


/**Jose-profile web - version 5.03 - WorkComponent - Features:
 * 
 *      --> writting 'WorkExperienceDescription'
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const WorkExperienceWrapper = styled.section`
    display: grid;
    background: white;
    grid-column: col-start 8 / col-end 6;
    grid-template-rows: repeat(2);

    section#work-experience > article > section > div > p > span{
        text-transform: capitalize;
        font-weight: 700;  
    }
    
    section#work-experience:hover{
        margin-top: 6rem;
    }
    
    .work-experience--para{
        margin: 1.7rem;
    }
`

const WorkExperienceContainer = styled.article`

`

const WorkExperienceDescription = styled.section`

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
                        <div>
                            <h4 className="work-experience--roltitle"><span>rol - </span>{roltitle}</h4>
                        </div>
                        <div>
                            <p className="work-experience--para"><span>company - </span>{company === '' ? undefined : company}</p>
                        </div>

                        <p className="work-experience--para" >{experience1}</p>
                        <p className="work-experience--para" >{experience2}</p>
                        { experience3 ? <p className="work-experience--para" >{experience3}</p> : null}
                        <p className="work-experience--para">Period: {year}</p>
                        
                        <hr/>
                        </WorkExperienceDescription>
                    </WorkExperienceContainer>
                )
            })}
        </WorkExperienceWrapper>
    )
}


export default WorkComponent;