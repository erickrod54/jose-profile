import React from "react";
import { useJoseProfileContext } from "../context";
import styled from "styled-components";

/**Jose-profile web - version 4.12 - Skills Component - Features:
 * 
 *      --> writting 'SkillsContainer' styles
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

const SkillsComponent = () => {

    const { skills } = useJoseProfileContext();
    console.log('skills data ==>', skills)

    const skillstitle = skills[0].title

    return(
        <SkillsContainer>
            <h2 className="skills--title">{skillstitle}</h2>
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