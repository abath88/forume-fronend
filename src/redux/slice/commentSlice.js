import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  comment: null,
  post: null,
  isLoading: false,
  error: null,
}

const backendURL = 'http://localhost:3001'

export const addComment = createAsyncThunk(
  'comment/addComment',
  async ({ postId, text }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem('Bearer')
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/comment/`,
        { text, postId },
        config
      );
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addComment.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isLoading = false
      state.comment = action.payload.data
    })
    builder.addCase(addComment.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export default commentSlice.reducer