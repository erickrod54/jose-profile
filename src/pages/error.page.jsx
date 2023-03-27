import React from "react";
import { useNavigate } from 'react-router-dom';

/**Jose-profile web - version 2.05 - ErrorPage Component - Features:
 * 
 *      --> Implementing useNavigate to navigate to 'HomePage'.
 * 
 *      --> Implementing style naming class.
 * 
 *      --> Editing error message.
 * 
 * Notes: Pending to set useLocation to get url params and 
 * show the user the incorrect url.
*/

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleHome = () => {

        navigate('/')
    }

    return(
    <div className="error-page">
        <div className="error-page--message">
            <h2>page does not exist</h2>
            <button onClick={handleHome} className='button'> Go Back Home Page</button>
        </div>
    </div>
    )
}

export default ErrorPage;