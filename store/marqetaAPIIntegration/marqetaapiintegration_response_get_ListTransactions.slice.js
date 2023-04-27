import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const marqetaapiintegration_get_transactions_read = createAsyncThunk(
  "marqetaapiintegration_response_get_ListTransactions/marqetaapiintegration_get_transactions_read",
  async payload => {
    const response = await apiService.marqetaapiintegration_get_transactions_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const marqetaapiintegration_response_get_ListTransactionsSlice = createSlice({
  name: "marqetaapiintegration_response_get_ListTransactions",
  initialState,
  reducers: {},
  extraReducers: {
    [marqetaapiintegration_get_transactions_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [marqetaapiintegration_get_transactions_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [marqetaapiintegration_get_transactions_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  marqetaapiintegration_get_transactions_read,
  slice: marqetaapiintegration_response_get_ListTransactionsSlice
}
