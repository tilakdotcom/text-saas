import API from "@/common/config/axios";
import { InitialStateProps } from "@/common/types/summary";
import { uploadPdfRequest } from "@/lib/ApiEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const uploadPdfForSummary = createAsyncThunk(
  "uplaod/data",
  async ({ pdf }: { pdf: File | undefined }) => {
    try {
      const response = await API.post(uploadPdfRequest, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: { pdf },
      });
      console.log("bhai response ", response.data);
      return response.data;
    } catch (error) {
      throw new Error((error as string) || "Error getting");
    }
  }
);

const initialState: InitialStateProps = {
  summaries: null,
  isLoading: false,
  error: null,
  current: null,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //upload pdf
    builder.addCase(uploadPdfForSummary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadPdfForSummary.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(uploadPdfForSummary.rejected, (state, action) => {
      state.isLoading = false;
      state.summaries = null;
      state.error = (action.error as string) || "Error in  uploading summary";
    });
  },
});

const summaryReducer = summarySlice.reducer;

export default summaryReducer;
