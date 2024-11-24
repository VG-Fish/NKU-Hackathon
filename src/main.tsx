import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Resources from "./routes/Resources.tsx";
import Scenario from "./routes/Scenario.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  { path: "/NKU-Hackathon", element: <App /> },
  { path: "/NKU-Hackathon/scenario", element: <Scenario /> },
  { path: "/NKU-Hackathon/resources", element: <Resources /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
