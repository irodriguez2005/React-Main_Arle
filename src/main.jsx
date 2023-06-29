import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HeaderNav } from './layout/header/Headerva'


import { Event } from './routes/RoutsClicl';
import {ToolbarRoute} from './routes/TolRouts'; 

import { SignupRoute } from './routes/SingUpRouts';
import { UsestateRoute } from './routes/UstateRout';
import { DadosRoute } from './routes/DadosRoute';

import { GalleryRoute } from './routes/GallRouts';
import { ApiexRoute } from './routes/ApiRouts';
import { FetchRoute } from './routes/FetchRoute';




const routes = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNav />
  },

  {
    path: "/src/components/click.jsx",
    element: <Event />
  },
  {
    path: "/src/components/Tol.jsx",
    element: < ToolbarRoute />
  },
  {
    path: "/signup",
    element: <SignupRoute />
  },
  {
    path: "/usestate",
    element: <UsestateRoute />
  },
  {
    path: "/dadosgame",
    element: <DadosRoute />
  },
  {
    path: "/src/components/Gall.jsx",
    element: <GalleryRoute />
  },
  {
    path: "/src/components/Api1.jsx",
    element: <ApiexRoute />
  },
  {
    path: "/fetch",
    element: <FetchRoute />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)