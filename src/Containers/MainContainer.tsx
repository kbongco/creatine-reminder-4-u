import Welcome from "../Screens/Welcome/Welcome";
import { useRoutes } from 'react-router-dom';
import Login from "../Screens/Login/Login";

export default function MainContainer() {
  return (
    <>
      {
        useRoutes([
        {path: '/', element: <Welcome/>},
          { path: '/login', element: <Login/> }
        ])
      }
    </>
  )
}