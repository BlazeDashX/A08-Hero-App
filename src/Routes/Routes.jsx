import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("booksdata.json"),
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/appData.json").then((r) => r.json()),
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);