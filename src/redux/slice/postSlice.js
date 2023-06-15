import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  error: null,
}

const backendURL = 'http://localhost:3001'

export const fetchPosts = createAsyncThunk(
  'post/fetchPost',
  async () => {
    const res = await axios(`${backendURL}/api/post`)
    const data = await res.data
    return data
  }
)

export const fetchOnePost = createAsyncThunk(
  'post/fetchOnePost',
  async ({ id }) => {
    const res = await axios(`${backendURL}/api/post/${id}`)
    const data = await res.data
    return data
  }
)

export const addPost = createAsyncThunk(
  'post/addPost',
  async ({ title, text }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem('Bearer')
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/post`,
        { title, text },
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

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload.data
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    builder.addCase(fetchOnePost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchOnePost.fulfilled, (state, action) => {
      state.isLoading = false
      state.post = action.payload.data
    })
    builder.addCase(fetchOnePost.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    builder.addCase(addPost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload.data
    })
    builder.addCase(addPost.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    builder.addCase(addComment.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isLoading = false
      state.post._comments.push(state.posts = action.payload.data);
    })
    builder.addCase(addComment.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export default postSlice.reducer