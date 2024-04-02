// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { apiRoutes } from '../../../../utils/api/apiRotes'

// export interface DataToSendType {
// 	password: string
// 	phone: string
// }

// // export const authorizationApi = createApi({
// // 	reducerPath: 'authorizationApi',
// // 	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
// // 	tagTypes: ['authorization'],
// // 	endpoints: builder => ({
// // 		userAuthorization: builder.query<dataToSendType[], string>({
// // 			query: dataToSend => (apiRoutes.login, dataToSend),
// // 			providesTags: ['authorization'],
// // 		}),
// // 	}),
// // })

// export const authApi = createApi({
// 	reducerPath: 'authApi',
// 	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
// 	tagTypes: ['authorization'],

// 	endpoints: builder => ({
// 		authUser: builder.query<DataToSendType[], string>({
// 			query: () => apiRoutes.login,
// 			providesTags: ['authorization'],
// 		}),
// 	}),
// })

// export const { authUser } = authApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from '../../../../utils/api/apiRotes'

export interface DataToSendType {
	// id: string
	// title: string
	// done: boolean
	phone: string
	password: string
}
export interface PingPongType {
	message: string
	payload: string
}

export const authApi = createApi({
	reducerPath: 'authorizationApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	tagTypes: ['Auth'],
	endpoints: builder => ({
		authUser: builder.mutation({
			query: dataToSend => ({
				url: apiRoutes.login,
				body: dataToSend,
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),
		getPinPong: builder.query<PingPongType[], void>({
			query: () => ({ url: '/ping' }),
			providesTags: ['Auth'],
		}),
	}),
})

export const { useLazyGetPinPongQuery } = authApi
