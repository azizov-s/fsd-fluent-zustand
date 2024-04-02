import { configureStore } from '@reduxjs/toolkit'
import { authorizationSlice } from '../../pages/login/store'
import { authApi } from '../../pages/login/store/api/api'

export const store = configureStore({
	reducer: {
		authorization: authorizationSlice.reducer,
		[authApi.reducerPath]: authApi.reducer,
		// [fe.reducerPath]: authApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			authApi.middleware
		),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
