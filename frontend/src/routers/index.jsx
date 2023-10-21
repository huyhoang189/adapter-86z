import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import Layouts from "../layouts/admin";
import Departments from "../pages/department";
import Login from "../pages/auth/login";
import Malwares from "../pages/malware";
import Category from "../pages/category";
import Variants from "../pages/variant";
import ReportToday from "../pages/reportToday";
import Fmcs from "../pages/fmc";
export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/admin",
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
        path: "malwares/:id",
        element: <Variants />,
      },
      {
        path: "fmcs",
        element: <Fmcs />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "today",
        element: <ReportToday />,
      },
    ],
  },
]);
