import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  summaries: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialStateProps = {
  summaries: null,
  isLoading: false,
  error: null,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    console.log(builder);
  },
});

const summaryReducer = summarySlice.reducer;

export default summaryReducer;
