import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostCardType } from "../components/PostCard";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    // for get we have query and for post update and delete we have mutation
    //----------------- resultType, queryType-------------------------------
    getPosts: builder.query<PostCardType[], string>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    newPost: builder.mutation<PostCardType, PostCardType>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

// export const { getPosts } = myApi.endpoints; // used when import from @reduxjs/toolkit/query

export const { useGetPostsQuery, useNewPostMutation } = myApi;
