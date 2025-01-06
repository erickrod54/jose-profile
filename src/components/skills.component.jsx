import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { SkillsContainer, SkillsTitle } from "../style.components";

/**Jose-profile web - version 4.19 - Skills Component - Features:
 * 
 *      --> writting 'SkillsTitle' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const SkillsList = styled.ul`
    margin: 1rem;
    padding: 1rem;
    font-size: calc(.7rem + 0.637vw);
    line-height: 2rem;
`

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