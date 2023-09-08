import { createBrowserRouter } from "react-router-dom";

import Rootlayout from "./pages/Rootlayout.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

export default router;
