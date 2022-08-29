import React from "react";

/**Routing */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/**Components and pages */
import NavBar from "./components/navbar.component";
import HomePage from "./pages/home.page";
import ErrorPage from "./pages/error.page";
import Footer from "./components/footer.component";

/**Jose-profile web - version 1 - App js - Features:
 * 
 *      --> Setting up 'react-router' version 6
 * 
 *      --> Importing and Placing pages and 
 *          Components.
 * 
 * Notes: For now all routes are targetting to
 * home, but eventually in next version i'll
 * fix it routing to each route matching the
 * right Component-Page
*/


function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/intro" element={<HomePage />}/>
          <Route path="/work-experience" element={<HomePage />}/>
          <Route path="/skills" element={<HomePage />}/>
          <Route path="/languages" element={<HomePage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
