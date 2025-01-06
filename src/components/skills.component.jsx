import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { SkillsContainer, SkillsList, SkillsTitle } from "../style.components";

/**Jose-profile web - version 4.20 - Skills Component - Features:
 * 
 *      --> writting 'SkillsList' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const SkillsListContainer = styled.div`

`

const SkillsItem = styled.li`
    font-size: calc(.7rem + 0.637vw);
    line-height:  2rem;
`

const SkillsComponent = () => {

    const { skills } = useJoseProfileContext();
    console.log('skills data ==>', skills)

    const skillstitle = skills[0].title

    return(
        <SkillsContainer>
            <SkillsTitle>{skillstitle}</SkillsTitle>
            {skills.map((skill) => {
                const { id, skillname  } = skill;
                return(
                    <SkillsListContainer key={id}>
                        <SkillsList>
                            <SkillsItem>{skillname}</SkillsItem>
                        </SkillsList>
                        <hr />
                    </SkillsListContainer>
                )
            })}
        </SkillsContainer>
    )
}

export default SkillsComponent;