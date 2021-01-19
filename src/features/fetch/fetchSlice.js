import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get(apiUrl);
  return res.data;
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState: { users: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});
export const selectUsers = (state) => state.fetch.users;
export default fetchSlice.reducer;
