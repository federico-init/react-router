import React from "react";
import ReactDOM from "react-dom/client";

// import router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import App from "./App";
import About from "./routes/about";
import Locations from "./routes/locations/locations";
import Location from "./routes/locations/location";
import Error from "./routes/error";

// import style
import "./index.css";

const router = createBrowserRouter([
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
        element: <Locations />,
      },
      {
        path: "/locations/:id",
        element: <Location />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
