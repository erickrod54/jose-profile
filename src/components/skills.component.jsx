import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";
import { SkillsContainer } from "../style.components";

/**Jose-profile web - version 4.18 - Skills Component - Features:
 * 
 *      --> writting 'SkillsContainer' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/


const SkillsTitle = styled.h2`
    margin: 1rem;
    padding: 1rem;
    color: hsla(22, 98%, 60%, 1);
    font-weight: 700;
    text-transform: capitalize;
    font-size: calc( 0.50rem + 1vw);
    box-shadow: 0px 2px 0px 0 5px 15px rgba(0, 0, 0, 0.2); /* add box shadow */
    text-decoration: underline 4px solid #222; /* add underline */
    text-underline-offset: 4px; /* adjust the distance of the underline from the text */
`

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