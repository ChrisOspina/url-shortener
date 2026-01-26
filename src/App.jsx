import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout.jsx";
import LandingPage from "./pages/landing.jsx";
import Auth from "./pages/auth.jsx";
import Dashboard from "./pages/dashboard.jsx";
import LinkPage from "./pages/link.jsx";
import RedirectLink from "./pages/redirect-link.jsx";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: (
          <RequireAuth>
            <RedirectLink />
          </RequireAuth>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;
