import { createBrowserRouter } from "react-router";

import MainLayout from "../components/Layouts/MainLayout";

import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBook from "../pages/AddBook/AddBook";

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
        path: "/add-book",
        element: <AddBook></AddBook>,
      },
    ],
  },
]);
