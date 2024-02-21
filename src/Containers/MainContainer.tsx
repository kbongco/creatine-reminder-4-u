import Welcome from "../Screens/Welcome/Welcome";
import { useRoutes } from 'react-router-dom';
import Login from "../Screens/Login/Login";

export default function MainContainer() {
  return (
    <>
      <Welcome />
      {
        useRoutes([
          { path: '/login', element: <Login/> }
        ])
      }
    </>
  )
}