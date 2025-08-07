import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";

import OurBooks from "../pages/OurBooks/OurBooks";
import MyBorrowedBooks from "../pages/MyBorrowedBooks/MyBorrowedBooks";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/our-books", element: <OurBooks></OurBooks> },
      {
        path: "my-borrowed-books",
        element: <MyBorrowedBooks></MyBorrowedBooks>,
      },
    ],
  },
]);
