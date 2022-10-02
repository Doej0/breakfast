import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/root";
import Home from './routes/home';
import Menu from './routes/menu';
import About from './routes/about';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Contact from './routes/contact';


const router= createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        path:'/',
        element:<Home/>
      },
      {
        path:'menu/',
        element:<Menu/>
      },
      {
        path:'about/',
        element:<About/>
      },
      {
        path:'contact/',
        element:<Contact/>
      }
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


