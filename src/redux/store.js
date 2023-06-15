import { configureStore } from '@reduxjs/toolkit'
import postSlice from './slice/postSlice'
import authReducer from './slice/authSlice'


export const store = configureStore({
  reducer: {
    posts: postSlice,
    auth: authReducer
  },
})