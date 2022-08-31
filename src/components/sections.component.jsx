import React from "react";
import { useAppContext } from '../context';
import styled from "styled-components";

import { Link } from 'react-router-dom'

/**jose-profile page - version 1 - Sections Component - 
 * Features: 
 * 
 *      --> Destructuring 'Sections' data.
 * 
 *      --> Building a Style 'Wrapper' Component
 *          to style the sections render.
 * 
 * Notes: By this version i'll work on styling the app 
 * and add essential components
 * */

const Sections = () => {

    const { sections } = useAppContext();

    return(
        <>
        <Wrapper>
            <div>
           {sections.map((section) => {
            const { id, sectionname, url } = section

            return(
                <div key={id} className='element'>
                <div>

                <Link to={url}  className='sectionname'>
                    <div className={sectionname ==='skills' ? 'element skills text' : 'element text'}>
                        
                    {sectionname} 
                    </div>
                <div className="title-underline"/>
                    
                </Link>     
                </div>
                </div>
            )
           })}

            </div>
        </Wrapper>
        </>
    )        
}

const Wrapper = styled.div`
width: fit-content;
div{
    display: flex;
    flex-direction: column;
    padding: 0.50rem;
    margin: 0 auto;
    font-size: 1rem;
    border-right: 1px solid var(--clr-primary-12);
    
    .element{
       
        margin-top: 3rem;

        .skills{
            
            margin-top:27rem;
        }
    }

    .sectionname{
        color: var(--clr-black);
    }

    @media screen and (min-width: 1200px) {
    .element{
       
       margin-top: 2rem;

       div{
        margin-top: 1.75rem;
       }

       .skills{
           
           margin-top:15rem;
       }
    }

}

.title-underline{
  height: 0.50px;
  width: 6rem;
  background: var(--clr-primary-12);
  padding: 0.15rem;
  margin: 0 auto;
  margin-top: 0.50rem;
}

}
`

export default Sections;