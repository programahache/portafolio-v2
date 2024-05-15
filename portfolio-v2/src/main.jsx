import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Me from './components/me/Me.jsx';

import ProjectInfoModal from './components/Projects/ProjectInfoModal.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/me",
    element: <Me />
  },
  {
    path:'/proyectos/proyectoInfo/:name',
    element: <ProjectInfoModal/>
  }

  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
