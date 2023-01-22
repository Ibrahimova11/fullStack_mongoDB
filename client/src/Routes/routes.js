import { createBrowserRouter } from "react-router-dom";
import Artist from "../Pages/Artist/Artist";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import Rankings from "../Pages/Rankings/Rankings";

import Root from './Root'
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MarketPlace/>
      },
      {
        path: "/Artist",
        element: <Artist />,
      },
      {
        path: "/rankings",
        element: <Rankings />,
      }
    ],
  },
]);