import Welcome from "../Screens/Welcome/Welcome";
import { Navigate, useRoutes } from 'react-router-dom';
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";
import Home from "../Screens/HomeDashboard/Home";
import Settings from "../Screens/Settings/Settings";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import Forgot from "../Screens/ForgotPassword/ForgotPassword";
import AddATub from "../Screens/AddTub/AddTub";
import LearnMore from "../Screens/LearnMore/LearnMore";

export default function MainContainer() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => checkUser
  }, []);
  return (
    <>
      {
        useRoutes([
          { path: '/', element: <Welcome /> },
          { path: '/login', element: <Login /> },
          { path: '/sign-up', element: <Signup /> },
          { path:'/learn-more', element: <LearnMore/>},
          currentUser ? { path: '/home', element: <Home /> } : { path: '/home', element: <Navigate to="/login" /> },
          currentUser ? { path: '/settings', element: <Settings /> } : { path: '/settings', element: <Navigate to="/login" /> },
          currentUser ? {path:'/add-tub', element: <AddATub/>} : {path:'/add-tub', element: <Navigate to='/login'/>}
          // {path: '/forgot-password', element: <Forgot/>},
          // { path: '/home', element: <Home /> },
          // { path: '/settings', element: <Settings /> },
          // { path:'/add-tub', element: <AddATub/>}
        ])
      }
    </>
  )
}