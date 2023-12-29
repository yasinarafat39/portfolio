import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './App.css';
import ProjectDetails from './components/MyProjects/ProjectDetails';


import Main from './layout/Main';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';

//------------ Google Analytics --------------
import ReactGA from 'react-ga';
ReactGA.initialize('G-E9P2EJESW4');
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
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
