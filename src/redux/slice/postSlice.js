import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
  post: null,
  isLoading: false,
  error: null,
}

const backendURL = 'https://api.abath.pl'

export const fetchPosts = createAsyncThunk(
  'post/fetchPost',
  async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const res = await axios(`${backendURL}/api/post`, config)
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
          'Access-Control-Allow-Origin': '*',
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
          'Access-Control-Allow-Origin': '*',
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

export const upvoteComment = createAsyncThunk(
  'comment/upvoteComment',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem('Bearer'),
          'Access-Control-Allow-Origin': '*',
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/comment/${id}/upvote`, 
        {},
        config);
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

export const downvoteComment = createAsyncThunk(
  'comment/downvoteComment',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem('Bearer')
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/comment/${id}/downvote`,
        {},
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

export const upvotePost = createAsyncThunk(
  'post/upvotePost',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem('Bearer')
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/post/${id}/upvote`,
        {},
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

export const downvotePost = createAsyncThunk(
  'post/downvotePost',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem('Bearer')
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/post/${id}/downvote`,
        {},
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
      state.post = null
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

    builder.addCase(upvoteComment.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(upvoteComment.fulfilled, (state, action) => {
      state.isLoading = false
      const vote = state.post._comments.find(el => el._id === action.payload.data._id).vote;

      if(state.post._comments.find(el => el._id === action.payload.data._id).vote.positive.includes(localStorage.getItem('UserID'))){
        vote.positive = vote.positive.filter(el => el !== localStorage.getItem('UserID'))
      }else if(state.post._comments.find(el => el._id === action.payload.data._id).vote.negative.includes(localStorage.getItem('UserID'))){
        vote.negative = vote.negative.filter(el => el !== localStorage.getItem('UserID'))
        vote.positive.push(localStorage.getItem('UserID'))
      }else {
        vote.positive.push(localStorage.getItem('UserID'))
      }
    })
    builder.addCase(upvoteComment.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    builder.addCase(downvoteComment.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(downvoteComment.fulfilled, (state, action) => {
      state.isLoading = false
      const vote = state.post._comments.find(el => el._id === action.payload.data._id).vote;

      if(state.post._comments.find(el => el._id === action.payload.data._id).vote.negative.includes(localStorage.getItem('UserID'))){
        vote.negative = vote.negative.filter(el => el !== localStorage.getItem('UserID'))
      }else if(state.post._comments.find(el => el._id === action.payload.data._id).vote.positive.includes(localStorage.getItem('UserID'))){
        vote.positive = vote.positive.filter(el => el !== localStorage.getItem('UserID'))
        vote.negative.push(localStorage.getItem('UserID'))
      }else {
        vote.negative.push(localStorage.getItem('UserID'))
      }
    })
    builder.addCase(downvoteComment.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    builder.addCase(upvotePost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(upvotePost.fulfilled, (state, action) => {
      state.isLoading = false
      let post = null;
      if(state.post == null)
        post = state.posts.find(el => el._id === action.payload.data._id);
      else post = state.post
      if(post.vote.positive.includes(localStorage.getItem('UserID'))){
        post.vote.positive = post.vote.positive.filter(el => el !== localStorage.getItem('UserID'))
      }else if(post.vote.negative.includes(localStorage.getItem('UserID'))){
        post.vote.negative = post.vote.negative.filter(el => el !== localStorage.getItem('UserID'))
        post.vote.positive.push(localStorage.getItem('UserID'))
      }else {
        post.vote.positive.push(localStorage.getItem('UserID'))
      }
    })
    builder.addCase(upvotePost.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    builder.addCase(downvotePost.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(downvotePost.fulfilled, (state, action) => {
      state.isLoading = false
      let post = null;
      if(state.post == null)
        post = state.posts.find(el => el._id === action.payload.data._id);
      else post = state.post
      if(post.vote.negative.includes(localStorage.getItem('UserID'))){
        post.vote.negative = post.vote.negative.filter(el => el !== localStorage.getItem('UserID'))
      }else if(post.vote.positive.includes(localStorage.getItem('UserID'))){
        post.vote.positive = post.vote.positive.filter(el => el !== localStorage.getItem('UserID'))
        post.vote.negative.push(localStorage.getItem('UserID'))
      }else {
        post.vote.negative.push(localStorage.getItem('UserID'))
      }
    })
    builder.addCase(downvotePost.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export default postSlice.reducer