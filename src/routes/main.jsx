// import Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import components
import App from "./../App";
import About from "./About";
import LocationsList from "./locations/locationsList";
import Locations from "./locations/locations";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/locations",
        element: <LocationsList />,
      },
      {
        path: "/locations/:id",
        element: <Locations />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

// export const router = createBrowserRouter(
//     createRoutesFromElements(

//     )
// )
