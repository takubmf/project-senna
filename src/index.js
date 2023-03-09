import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only for React version 18
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'resume',
        element: <Resume />
      },
    ]
  }
])

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the correct method call for React version 17
render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  root
);