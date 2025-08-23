import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseBackanedUrl: string = "http://localhost:5000/";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseBackanedUrl,
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (body) => ({ url: "api/books", method: "POST", body }),
      invalidatesTags: ["books"],
    }),
    getAllBook: builder.query({
      query: () => "api/books",
      providesTags: ["books"],
    }),
  }),
});

export const { useAddBookMutation, useGetAllBookQuery } = bookApi;
