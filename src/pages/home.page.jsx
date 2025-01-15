import React from "react";
import { HeaderComponent, ResumeComponent, FooterComponent } from '../components/index.components';
import styled from "styled-components";
import { HomePageContainer } from "../style.components";

/**Jose-profile web - version 6.02 - HomePage - Features:
 * 
 *      --> Migrating 'HomePageContainer'.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HomePage = () => {

    return(
        <HomePageContainer>
            <HeaderComponent />
            <ResumeComponent />
            <FooterComponent />
        </HomePageContainer>
    )
}

export default HomePage;