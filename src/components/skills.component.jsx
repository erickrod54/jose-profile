import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";

/**Jose-profile web - version 4.13 - Skills Component - Features:
 * 
 *      --> writting 'SkillsTitle' styles
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const SkillsContainer = styled.section`
    display: grid;
    margin-top: 1rem;
    background-color: white;
    grid-column: col-start 4 / col-end 6;        
`

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
                    <div key={id}>
                        <ul className="skills--list">
                            <li className="skills--list--item">{skillname}</li>
                        </ul>
                        <hr />
                    </div>
                )
            })}
        </SkillsContainer>
    )
}

export default SkillsComponent;