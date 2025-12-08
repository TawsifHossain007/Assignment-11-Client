import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AllIssues from "../Pages/AllIssues/AllIssues";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Support from "../Pages/Support/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'all-issues',
            Component: AllIssues
        },
        {
            path: 'aboutUs',
            Component: AboutUs
        },
        {
            path: 'support',
            Component: Support
        }
    ]
  },
]);