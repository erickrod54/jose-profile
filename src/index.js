import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { JoseProfileProvider } from './context';
import { Helmet } from 'react-helmet';

/**Jose-profile web - version 2.02 - index js - Features:
 * 
 *      --> Refactoring the app.
 * 
 * Notes: All these are clean files in data, directory and 
 * files
*/

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
      <JoseProfileProvider>
        <App />
      </JoseProfileProvider>
    </React.StrictMode>
  </>
);
