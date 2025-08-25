import { createBrowserRouter } from "react-router";

import MainLayout from "../components/Layouts/MainLayout";

import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBook from "../pages/AddBook/AddBook";
import BorrowSummary from "../pages/BorrowSummary/BorrowSummary";
import Details from "../pages/Details/Details";

import EditBook from "../pages/EditBook/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/all-books", element: <AllBooks></AllBooks> },
      {
        path: "/create-book",
        element: <AddBook></AddBook>,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
      { path: "/books/:id", element: <Details></Details> },
      { path: "/edit-book/:id", element: <EditBook></EditBook> },
    ],
  },
]);
