import React from "react";

/**Routing */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/**Components and pages */
import HomePage from "./pages/home.page";
import ErrorPage from "./pages/error.page";

/**Jose-profile web - version 2.01 - App js - Features:
 * 
 *      --> Migrating 'NavBar' and 'Footer' Component.
 * 
 *      --> Changing versioning to two digits.
 * 
 * Notes: This Component can have later changes respecting
 * to a Shared Layout
*/


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/intro" element={<HomePage />}/>
          <Route path="/work-experience" element={<HomePage />}/>
          <Route path="/skills" element={<HomePage />}/>
          <Route path="/languages" element={<HomePage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
