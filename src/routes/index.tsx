import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "@/pages/app/Dashboard";
import { SignIn } from "@/pages/auth/SignIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },

]);

export function Routes() {
  return (
    <RouterProvider router={routes} />
  );
}