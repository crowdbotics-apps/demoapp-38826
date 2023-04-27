import axios from "axios"
import {
  MARQETA_API_INTEGRATION_USERNAME,
  MARQETA_API_INTEGRATION_PASSWORD
} from "react-native-dotenv"
const marqetaAPIIntegration = axios.create({
  baseURL: "https://sandbox-api.marqeta.com/v3",
  auth: {
    username: MARQETA_API_INTEGRATION_USERNAME,
    password: MARQETA_API_INTEGRATION_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function marqetaapiintegration_get_transactions_read(payload) {
  return marqetaAPIIntegration.get(`/transactions`)
}
function marqetaapiintegration_post_peertransfers_create(payload) {
  return marqetaAPIIntegration.post(`/peertransfers`, payload.data)
}
function marqetaapiintegration_get_cardtransitions_read(payload) {
  return marqetaAPIIntegration.get(`/cardtransitions/`)
}
export const apiService = {
  marqetaapiintegration_get_transactions_read,
  marqetaapiintegration_post_peertransfers_create,
  marqetaapiintegration_get_cardtransitions_read
}
