import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styles.css";

// Import route components
import Home from "./routes/_index";
import About from "./routes/about";
import Work from "./routes/work";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
