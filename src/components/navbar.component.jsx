import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useAppContext } from "../context";

/**jose-profile page - version 2 - navbar.component.jsx - 
 * Features: 
 * 
 *      --> Re-styling 'NavWrapper' 
 * 
 * Notes: By this version i'll work on styling the app 
 * and add essential components
 * */
const NavBar = () => {
    

    const { intro } = useAppContext();
    

    return(
      <NavWrapper>
        <section className="section section-center">
          <div className="title"></div>
          {intro.map((items) => {
            const { id, name } = items;

            return(
            <Link to='/' key={id}>
              <h2 className="title">{name}</h2>
            </Link>
            )
          })}
        </section>
      </NavWrapper>
                
    )
}

const NavWrapper = styled.nav`
  background-color: var(--clr-primary-15); 
  border-bottom: 2px solid var(--clr-primary-11);
  
  &:hover{
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
  }
  .title{
      color: var(--clr-white);
      text-shadow: -1px 0 black, 0 1px black
  }

`

export default NavBar;