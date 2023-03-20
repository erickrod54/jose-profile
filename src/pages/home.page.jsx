import React from "react";
import styled from "styled-components";
//import Sections from "../components/sections.component";
import Content from "../components/content.component";

import { Footer, NavBar, IntroComponent, WorkComponent, SkillsComponent, LanguagesComponent } from '../components/index.components';



/**Jose-profile web - version 2.01 - HomePage - Features:
 * 
 *      --> Placing separate components to refactor home
 * 
 *      --> Changing versioning to two digits.
 * 
 * Notes: Every component will be uncommented as it is
 * finish
*/

const HomePage = () => {

    return(
        <div className="container">
            <NavBar />
                <Content />
                {/**
                <IntroComponent />
                <WorkComponent />
                <SkillsComponent />
                <LanguagesComponent /> 
                */}
            <Footer/>
        </div>
    )
}

const Wrapper = styled.section`
  
`

export default HomePage;