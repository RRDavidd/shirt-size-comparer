import { configureStore } from '@reduxjs/toolkit'
import sizeReducer from './reducers/sizeReducers'

const store = configureStore({
    reducer:{
        size: sizeReducer,
    }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch