import Welcome from "../Screens/Welcome/Welcome";
import { useRoutes } from 'react-router-dom';
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";
import Home from "../Screens/HomeDashboard/Home";
import Settings from "../Screens/Settings/Settings";

export default function MainContainer() {
  return (
    <>
      {
        useRoutes([
        {path: '/', element: <Welcome/>},
          { path: '/login', element: <Login /> },
          { path: '/sign-up', element: <Signup /> },
          { path: '/home', element: <Home /> },
          { path:'/settings', element: <Settings/>}
        ])
      }
    </>
  )
}