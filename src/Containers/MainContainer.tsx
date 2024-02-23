import Welcome from "../Screens/Welcome/Welcome";
import { useRoutes } from 'react-router-dom';
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";
import Home from "../Screens/HomeDashboard/Home";

export default function MainContainer() {
  return (
    <>
      {
        useRoutes([
        {path: '/', element: <Welcome/>},
          { path: '/login', element: <Login /> },
          { path: '/sign-up', element: <Signup /> },
          { path:'/home', element: <Home/>}
        ])
      }
    </>
  )
}