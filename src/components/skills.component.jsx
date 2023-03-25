import React from "react";
import { useJoseProfileContext } from "../context";

/**Jose-profile web - version 2.02 - Skills Component - Features:
 * 
 *      --> Clearing Code from old Markup.
 * 
 *      --> Applying style class naming.
 * 
 *      --> Refactoring the app.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const SkillsComponent = () => {

    const { skills } = useJoseProfileContext();
    console.log('skills data ==>', skills)

    const skillstitle = skills[0].title

    return(
        <section id="skills">
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
        </section>
    )
}

export default SkillsComponent;