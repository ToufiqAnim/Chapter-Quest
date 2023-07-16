import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Books from "@/pages/Books";
import BooksDetails from "@/pages/BooksDetails";
import Home from "@/pages/Home";
import Wishlist from "@/pages/Wishlist";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books-details/:id",
        element: <BooksDetails />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
export default routes;
