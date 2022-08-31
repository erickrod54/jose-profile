import React from "react";
import styled from "styled-components";
import { useAppContext } from '../context'

/**jose-profile page - version 1 - Content Component - 
 * Features: 
 * 
 *      --> Destructuring 'intro', 'workexperience',gk
 *          'skills', and 'languages' data.
 * 
 *      --> Building a Style 'Wrapper' Component
 *          to style the sections render.
 * 
 * Notes: By this version i'll work on styling the app 
 * and add essential components
 * 
 * in later versions i'll add this content and sections
 * into separe components so i can handle a better styling
 * for small screens
 * */

const Content = () =>  {

    const { intro, workexperience, skills, languages } = useAppContext()

    return(
        <Wrapper className="text">
            <div>
                <div className="intro">
            {intro.map((items) => {
                const { id, text } = items
                
                return(
                    <section key={id}>
                        <p key={id}>{text}</p>
                        <hr/>
                    </section>
                    
                )
            })}
        </div>
        <div className="workexperience">
            {workexperience.map((items) => {
                const { id, roltitle, company, experience1, experience2, experience3, year } = items
                
                return(
                    <article key={id}>
                        <section key={id}>
                        <div className="info text">
                        <h4 className="roltitle"><span>rol - </span>{roltitle}</h4>
                        </div>
                        <div className="info text">
                        <p className="company"><span>company - </span>{company === '' ? undefined : company}</p>
                        </div>
                        <p>{experience1}</p>
                        <p>{experience2}</p>
                        { experience3 ? <p>{experience3}</p> : null}
                        <p>Period: {year}</p>
                        
                        <hr/>
                        </section>
                    </article>
                )
            })}

        </div>
        <div className="skills">

            {skills.map((items) => {
                const { id, sectionname, skill1, skill2  } = items;
                return(
                    <article key={id}>
                        <h4>{sectionname}</h4>
                        <p>{skill1}</p>
                        <p>{skill2}</p>
                        <hr />
                    </article>
                )
            })}
            </div>
        </div>
        <div className="languages">
            {languages.map((language) => {
                const { id, languagename, icon } = language;

                return(
                    <article key={id}>
                        <h5>{languagename} {icon}</h5>
                    </article>
                )
            })}
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    width: fit-content;

    div{
        padding: 0.25rem;
        
    }
    h4{
        font-size: 1rem;
    }
    p
    {
        font-size: 1rem;
    }
    section{
        margin-top: 1.25rem;
    }
    .intro{
        margin-top: 1rem;
        padding: 1rem;
    }
    .workexperience{
        margin-top: 2rem;
        padding: 1rem;
    }
    .skills{
        margin-top: 1rem;
        padding: 1rem;
    }
    .languages{
        display: flex;
        h5 {
            margin-left: 1rem;
        }
    }
    .info{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0.25rem;
        
        span{
            color: var(--clr-grey-7);
            margin-right: 1.25rem;
            text-transform: capitalize;
        }
    }
    .company{
        color: var(--clr-primary-12);
    }
    .roltitle{
        color: var(--clr-primary-13);
    }

    @media screen and (min-width: 1200px) {
        .wrapper{
            margin-top: 6rem;
        }
    }
`

export default Content;