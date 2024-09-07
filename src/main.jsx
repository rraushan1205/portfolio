import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'; // Ensure these are imported
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from './Contact';
import Aboutme from './Aboutme';
const router = createBrowserRouter([
  {
    path: "/portfolio.io/",
    element: <App />,
  },
  {
    path: "/portfolio.io/contact/",
    element: <Contact />,
  },
  {
    path: "/portfolio.io/about/",
    element: <Aboutme />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
