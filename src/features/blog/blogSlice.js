import { createSlice } from "@reduxjs/toolkit";


export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: []
  },
  reducers: {
    addToBlog: (state, action) => {
      state.blogs.push(action.payload);
    }
  }
});


export const { addToBlog } = blogSlice.actions;