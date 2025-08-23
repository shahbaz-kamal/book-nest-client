import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseBackanedUrl: string = "http://localhost:5000/";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseBackanedUrl,
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (body) => ({ url: "api/books", method: "POST", body }),
      //   providesTags: ["book"],
    }),
    // getAllBook:builder.query({
    //     query:()
    // })
  }),
});

export const { useAddBookMutation } = bookApi;
