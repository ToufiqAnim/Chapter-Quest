import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Books from "../pages/Books";
import BooksDetails from "../pages/BooksDetails";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import { PrivateRoute, PublicRoute } from "./PrivateRoute";
import AddBooks from "../pages/AddBooks";
import EditBook from "../pages/EditBook";
import ReadingList from "../pages/ReadingList";
import FinishedBooks from "../pages/FinishedBooks";
import SearchResult from "../pages/SearchedBooks";
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
        path: "/search/:searchTerm",
        element: <SearchResult />,
      },
      {
        path: "books/add-book",
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "books/edit/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/reading-list",
        element: (
          <PrivateRoute>
            <ReadingList />
          </PrivateRoute>
        ),
      },
      {
        path: "/finished-books",
        element: (
          <PrivateRoute>
            <FinishedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      /*   {
        path: "*",
        element: <NotFound />,
      }, */
    ],
  },
]);
export default routes;
