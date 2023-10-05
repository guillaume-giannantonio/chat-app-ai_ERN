import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: [],
  endpoints: (build) => ({
    postAiText: build.mutation({
      query: (paylod) => ({
        url: 'openai/text',
        method: 'POST',
        body: paylod,
      }),
    }),
    postAiCode: build.mutation({
      query: (paylod) => ({
        url: 'openai/code',
        method: 'POST',
        body: paylod,
      }),
    }),
    postAiAssist: build.mutation({
      query: (paylod) => ({
        url: 'openai/assist',
        method: 'POST',
        body: paylod,
      }),
    }),
    postLogin: build.mutation({
      query: (paylod) => ({
        url: 'auth/login',
        method: 'POST',
        body: paylod,
      }),
    }),
    postSignUp: build.mutation({
      query: (paylod) => ({
        url: 'auth/signup',
        method: 'POST',
        body: paylod,
      }),
    }),
  }),
});

export const {
  usePostAiTextMutation,
  usePostAiCodeMutation,
  usePostAiAssistMutation,
  usePostLoginMutation,
  usePostSignUpMutation,
} = api;
