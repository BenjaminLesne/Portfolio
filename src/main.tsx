import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./translation/config";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotOpenSource } from "./components/NotOpenSource/NotOpenSource";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="loading">
        <App />
      </Suspense>
    ),
  },
  {
    path: "/not-open-source",
    element: <NotOpenSource />,
  },
  {
    path: "/pas-open-source",
    element: <NotOpenSource />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
