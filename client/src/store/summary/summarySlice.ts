import API from "@/common/config/axios";
import { InitialStateProps } from "@/common/types/summary";
import {
  getSummariesRequest,
  getSummaryByIdRequest,
  uploadPdfRequest,
} from "@/lib/ApiEndpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const uploadPdfForSummary = createAsyncThunk(
  "uplaod/data",
  async ({ pdf }: { pdf: File }) => {
    try {
      const formData = new FormData();
      formData.append("pdf", pdf);
      const response = await API.post(uploadPdfRequest, formData);
      return response.data.data.summary;
    } catch (error) {
      throw new Error((error as string) || "Error getting");
    }
  }
);

export const getPdfSummaries = createAsyncThunk(
  "getPdfSummaries/data",
  async (page?: string) => {
    try {
      const response = await API.get(getSummariesRequest(page));
      return response.data.data;
    } catch (error) {
      throw new Error((error as string) || "Error getting");
    }
  }
);

export const getPdfSummaryById = createAsyncThunk(
  "getPdfSummaryById/data",
  async (id: string) => {
    try {
      const response = await API.get(getSummaryByIdRequest(id));
      return response.data.data;
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
  currentPage: 1,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    //upload pdf
    builder.addCase(uploadPdfForSummary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadPdfForSummary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = action.payload;
    });
    builder.addCase(uploadPdfForSummary.rejected, (state, action) => {
      state.isLoading = false;
      state.summaries = null;
      state.error = (action.error as string) || "Error in  uploading summary";
    });
    //get all summmary
    builder.addCase(getPdfSummaries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPdfSummaries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.summaries = action.payload.summaries;
    });
    builder.addCase(getPdfSummaries.rejected, (state, action) => {
      state.isLoading = false;
      state.summaries = null;
      state.error = (action.error as string) || "Error in  uploading summary";
    });
    //get summmary by id
    builder.addCase(getPdfSummaryById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPdfSummaryById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = action.payload;
    });
    builder.addCase(getPdfSummaryById.rejected, (state, action) => {
      state.isLoading = false;
      state.current = null;
      state.error = (action.error as string) || "Error in  uploading summary";
    });
  },
});

export const { setCurrentPage } = summarySlice.actions;

const summaryReducer = summarySlice.reducer;

export default summaryReducer;
