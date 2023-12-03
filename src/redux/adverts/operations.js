import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://6568f6da9927836bd975a8d6.mockapi.io/";

export const fetchAdverts = createAsyncThunk(
  "adverts/FetchAdverts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { data } = await axios.get("/adverts");
      console.log(data);
      return data;
    } catch (error) {
      toast.error(` Something's wrong. Server error: ${error.message} `);
      return rejectWithValue(error.message);
    }
  }
);
