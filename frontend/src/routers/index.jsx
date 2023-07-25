import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import Layouts from "../layouts";
import Departments from "../pages/department";
import Login from "../pages/auth/login";
import Malwares from "../pages/malware";
import Category from "../pages/category";
import Variants from "../pages/variant";
export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Departments />,
      },
      {
        path: "departments",
        element: <Departments />,
      },
      {
        path: "malwares",
        element: <Malwares />,
      },
      {
        path: "malwares/:id", // Remove the leading "/"
        element: <Variants />,
      },
      {
        path: "category",
        element: <Category />,
      },
    ],
  },
]);
