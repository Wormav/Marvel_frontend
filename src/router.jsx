import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Comics from "./pages/Comics/Comics.jsx";

// Utiliser la fonction Comics

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: "/comics",
        element: <Comics />,
        children: [],
      },
    ],
  },
]);

export default router;
