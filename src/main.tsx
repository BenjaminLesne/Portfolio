import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./translation/config";

import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { NotOpenSource } from "./components/NotOpenSource/NotOpenSource";

const isStaticAsset = (path) => {
  const staticExtensions = [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".pdf",
    ".ico",
  ];
  return staticExtensions.some((ext) => path.toLowerCase().endsWith(ext));
};

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  if (isStaticAsset(window.location.pathname)) {
    window.location.href = window.location.pathname;
    return null;
  }

  throw error;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="loading">
        <App />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
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
