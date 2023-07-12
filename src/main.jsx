import React from "react";
import ReactDOM from "react-dom/client";
// import router
import { router } from "./routes/main";
import { RouterProvider } from "react-router-dom";

// import style
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
