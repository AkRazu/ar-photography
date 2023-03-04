import { createBrowserRouter } from "react-router-dom";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Home/Main/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);
