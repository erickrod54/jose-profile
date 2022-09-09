import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider  } from './context';
import { Helmet } from 'react-helmet'

/**jose-profile page - version 2 - index js - 
 * Features: 
 * 
 *      --> Implementing 'Helmet' to change title and
 *          set some description for SEO. 
 * 
 * Notes: By this version i'll work on styling the app 
 * and add essential components
 * */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Jose A. Pahmer - Web Profile</title>
      <link rel="canonical" href="https://joseantonioxv.netlify.app/" />
      <meta name="description" content="Jose A. Pahmer V. web profile, job background and projects"></meta>
  </Helmet>
  <React.StrictMode>
   <AppProvider>
      <App />
   </AppProvider>
  </React.StrictMode>
  </>
);

