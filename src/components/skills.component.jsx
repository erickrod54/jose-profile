import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { SkillsContainer, SkillsList, SkillsListContainer, SkillsTitle } from "../style.components";

/**Jose-profile web - version 5.00 - Skills Component - Features:
 * 
 *      --> writting 'SkillsListContainer' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


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