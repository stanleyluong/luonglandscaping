import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./app/about";
import Contact from "./app/contact";
import FencesGates from "./app/fences-gates";
import Irrigation from "./app/irrigation";
import Home from "./app/page";
import Patios from "./app/patios";
import RetainingWalls from "./app/retaining-walls";
import Services from "./app/services";
import SustainableLandscapeDesign from "./app/sustainable-landscape-design";
import YardMaintenance from "./app/yard-maintenance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { 
        path: "services", 
        element: <Services />,
        children: [
          { path: "fences-gates", element: <FencesGates /> },
          { path: "retaining-walls", element: <RetainingWalls /> },
          { path: "patios", element: <Patios /> },
          { path: "sustainable-landscape-design", element: <SustainableLandscapeDesign /> },
          { path: "irrigation", element: <Irrigation /> },
          { path: "yard-maintenance", element: <YardMaintenance /> },
        ]
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
