import { createBrowserRouter } from "react-router";
import App from "./App";
import ProjectDetails from "./components/ProjectDetails";

export const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/:id", Component: ProjectDetails },
]);
