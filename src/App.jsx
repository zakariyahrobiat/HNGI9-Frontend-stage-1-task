import React from "react";
import Task from "./task";
import Contact from "./contact";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Task />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
