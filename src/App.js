import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import ProjectDetails from './components/MyProjects/ProjectDetails';
import ReactGA from "react-ga4";

import Main from './layout/Main';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';

//------------ Google Analytics --------------

const TRACKING_ID = "G-E9P2EJESW4";
ReactGA.initialize(TRACKING_ID);
//------------- End Google Analytics ---------



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <ProjectDetails></ProjectDetails>,
          loader: ({ params }) => fetch(`https://portfolio-server-opal.vercel.app/projects/${params.id}`)
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }
      ]

    },

  ])


  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home page"
    });
  }, []);


  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
