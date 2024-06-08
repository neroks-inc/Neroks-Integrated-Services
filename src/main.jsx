import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contact from "./pages/Contact.jsx"
import Project from "./pages/Project.jsx"
import Services from "./pages/Services.jsx"
import Team from "./pages/Team.jsx"
import Testimonials from './pages/Testimonals.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "project",
    element: <Project/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
  {
    path: "team",
    element: <Team/>,
  },
  {
    path: "testimonals",
    element: <Testimonials/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
