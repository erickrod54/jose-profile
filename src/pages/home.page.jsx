import React from "react";
import { HeaderComponent, ResumeComponent, FooterComponent } from '../components/index.components';
import styled from "styled-components";

/**Jose-profile web - version 6.02 - HomePage - Features:
 * 
 *      --> writting 'HomePageContainer'.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HomePageContainer = styled.div`
    display: grid;
    grid-template-columns: 
        [container-start] 1fr 
        [center-start] repeat(8, [col-start] minmax(min-content, 11rem) [col-end]) 
        [center-end] 1fr [container-end];
    grid-template-rows: 30vh repeat(3, min-content);
    min-height: 100vh;
    max-width: 100vw;
    padding: 1rem;
    gap: 1rem;

    /* Tablet (iPad and below) */
    @media (max-width: 1024px) {
        grid-template-columns: [container-start] 1fr [container-end]; /* Single column layout */
        grid-template-rows: auto;
        padding: 1rem;
    }

    /* Mobile (Phones) */
    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

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