import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../components/Home";
import Welcome from "./../components/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

export default router;
