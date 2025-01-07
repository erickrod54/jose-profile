import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { SkillsContainer, SkillsItem, SkillsList, SkillsListContainer, SkillsTitle } from "../style.components";

/**Jose-profile web - version 5.01 - Skills Component - Features:
 * 
 *      --> writting 'SkillsItem' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

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