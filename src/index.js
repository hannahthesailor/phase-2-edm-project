import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import ArtistsList from './components/ArtistsList';
import NewArtistForm from './components/NewArtistForm';
import Home from './components/Home';

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
        element: <Home />
      },
      {
        path: "/artists",
        element: <ArtistsList />
      },
      {
        path: "/add_artist",
        element: <NewArtistForm />
      },
      {
        path: "/discover",
        element: <Discover />
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

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );