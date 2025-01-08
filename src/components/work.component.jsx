import React from "react";
import styled from "styled-components";
import { useJoseProfileContext } from "../context";


/**Jose-profile web - version 5.04 - WorkComponent - Features:
 * 
 *      --> writting 'RolTitle'
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
                            <RolTitle><span>rol - </span>{roltitle}</RolTitle>
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