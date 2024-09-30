import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iUser } from '../app/@types/User.type'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_BASE_URL }), 
  endpoints: (builder) => ({
    getUsers: builder.query<iUser[], void>({
      query: () => 'users',
    }),
    getUserById: builder.query<iUser, string>({
      query: (id) => `users/${id}`,
    }),
    
    createUser: builder.mutation<iUser, Partial<iUser>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),

    updateUser: builder.mutation<iUser, { id: string, user: Partial<iUser> }>({
      query: ({ id, user }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
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
