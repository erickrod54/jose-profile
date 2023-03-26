import React from "react";
import { useNavigate } from 'react-router-dom';

/**Jose-profile web - version 2.04 - ErrorPage Component - Features:
 * 
 *      --> Placing button to 'navigate' back to 'HomePage'.
 * 
 * Notes: Pending to set navigation and styles for 'ErrorPage'
*/

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleHome = () => {

        navigate('/')
    }

    return(
    <div className="page-100">
        <h2>Error Page</h2>
        <button onClick={handleHome}> Go Back Home Page</button>
    </div>
    )
}

export default ErrorPage;