import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Books from "@/pages/Books";
import BooksDetails from "@/pages/BooksDetails";
import Home from "@/pages/Home";
import Wishlist from "@/pages/Wishlist";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import UpdateBook from "@/pages/UdateBook";
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
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default routes;
