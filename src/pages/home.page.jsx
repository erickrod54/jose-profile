import React from "react";
import styled from "styled-components";

import Sections from "../components/sections.component";
import Content from "../components/content.component";

/**Jose-profile web - version 1 - HomePage - Features:
 * 
 *      --> Importing and Placing 'Sections' and 
 *         'Content'  components in order to
 *          display the data
 * 
 * Notes: For now all routes are targetting to
 * home, but eventually in next version i'll
 * fix it routing to each route matching the
 * right Component-Page
*/

const HomePage = () => {

    return(
    <div>
    <Wrapper>
        <Sections className='sections'/>
        <Content  className='content'/>
    </Wrapper>
    </div> 
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;

  .sections{
    margin: 0 auto;
    border-radius: 2px solid black;
  }

  .content{
    margin: 0 auto;
  }
`

export default HomePage;