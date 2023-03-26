import React from "react";
import HomePage from "./pages/home.page";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from "./pages/error.page";

/**Jose-profile web - version 2.03 - App js - Features:
 * 
 *      --> Setting 'Routing' and 'ErrorPage'.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
