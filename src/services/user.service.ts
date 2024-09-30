import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iUser } from '../app/@types/User.type'
import {HTTP_LIST} from "@/src/constants/http"

console.log(process.env.NEXT_PUBLIC_BASE_URL, 'proccess.env.NEXT_BASE_URL')

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }), 
  endpoints: (builder) => ({
    getUsers: builder.query<iUser[], void>({
      query: () => HTTP_LIST.HTTP_USER_KEY_URL,
    }),
    getUserById: builder.query<iUser, string>({
      query: (id) => `${HTTP_LIST.HTTP_USER_KEY_URL}/${id}`,
    }),
    
    createUser: builder.mutation<iUser, Partial<iUser>>({
      query: (user) => ({
        url: HTTP_LIST.HTTP_USER_KEY_URL,
        method: 'POST',
        body: user,
      }),
    }),

    updateUser: builder.mutation<iUser, { id: string, user: Partial<iUser | unknown> }>({
      query: ({ id, user }) => ({
        url: `${HTTP_LIST.HTTP_USER_KEY_URL}/${id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `${HTTP_LIST.HTTP_USER_KEY_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = userApi
