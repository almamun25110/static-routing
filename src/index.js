import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
let route = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"about-us",
      element:<About/>
    },
    {
      path:'contact-us',
      element:<Contact/>
    },
    {
      path:'*',
      element:<Error404/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
