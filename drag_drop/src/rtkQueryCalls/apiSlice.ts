import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getUsersList: builder.query({
      query: (page) => `persons/${page}`,
    }),
  }),
});

export const { useGetUsersListQuery } = UsersApi;
