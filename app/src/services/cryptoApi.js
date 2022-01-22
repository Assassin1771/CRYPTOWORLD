import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_HOST,
  "x-rapidapi-key": process.env.REACT_APP__KEY,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});
