import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./counter.slice"
import { userApi } from '../services/user.service'
import { setupListeners } from '@reduxjs/toolkit/query'

export const makeStore = () => {
    return configureStore({
        reducer: {
            CounterReducer,
            [userApi.reducerPath]: userApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
    })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

setupListeners(makeStore().dispatch)