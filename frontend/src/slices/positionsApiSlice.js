import { POSITIONS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const positionsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getPositions: builder.query({
            query: ()=>({
                url: POSITIONS_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetPositionsQuery } = positionsApiSlice; 