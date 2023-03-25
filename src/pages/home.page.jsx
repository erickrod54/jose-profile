import React from "react";
import { HeaderComponent, ResumeComponent, FooterComponent } from '../components/index.components';

/**Jose-profile web - version 2.02 - HomePage - Features:
 * 
 *      --> Defining main Components.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

const HomePage = () => {

    return(
        <div className="container">
            <HeaderComponent />
            <ResumeComponent />
            <FooterComponent />
        </div>
    )
}

export default HomePage;