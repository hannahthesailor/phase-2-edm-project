import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import ErrorPage from './components/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Discover from './components/Discover';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/home",
        element: <h1>What is EDM?</h1>
      },
      {
        path: "/artists",
        element: <h1>Get to Know Some Top Arists in EDM Right Now</h1>
      },
      {
        path: "/add-artist",
        element: <h1>Is there an artist you love that you think should be included in this list? Add them here!</h1>
      },
      {
        path: "/discover",
        element: <h1>Discover a trending new song here</h1>
      }
    ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
