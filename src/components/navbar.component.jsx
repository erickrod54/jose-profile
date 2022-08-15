import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { AppContext } from "../context";

const NavBar = () => {
    

    const { scheme } = React.useContext(AppContext)
    console.log('the dataSet ==>', scheme[0].name)

    return(
        <div className="nav-center">
            <div className='nav-header'>
                <NavWrapper>
                <Link to='/' className="title">
                    <h3>{scheme[0].name}</h3>
                </Link>
                </NavWrapper>
            </div>
        </div>
    )
}

const NavWrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-15);
  
  h3{
      color: var(--clr-white);
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-11);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-13);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default NavBar;