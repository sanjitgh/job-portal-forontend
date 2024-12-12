import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>404 page not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivetRoute>
            <JobApply></JobApply>
          </PrivetRoute>
        ),
      },
      {
        path: "myApplication",
        element: (
          <PrivetRoute>
            <MyApplication></MyApplication>
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
