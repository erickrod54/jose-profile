import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from "./components/navbar.component";
import HomePage from "./pages/home.page";
import ErrorPage from "./pages/error.page";
import Footer from "./components/footer.component";


function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
