import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const marqetaapiintegration_post_peertransfers_create = createAsyncThunk(
  "marqetaapiintegration_response_post_PeerTransfers/marqetaapiintegration_post_peertransfers_create",
  async payload => {
    const response = await apiService.marqetaapiintegration_post_peertransfers_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const marqetaapiintegration_response_post_PeerTransfersSlice = createSlice({
  name: "marqetaapiintegration_response_post_PeerTransfers",
  initialState,
  reducers: {},
  extraReducers: {
    [marqetaapiintegration_post_peertransfers_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [marqetaapiintegration_post_peertransfers_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [marqetaapiintegration_post_peertransfers_create.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  marqetaapiintegration_post_peertransfers_create,
  slice: marqetaapiintegration_response_post_PeerTransfersSlice
}
