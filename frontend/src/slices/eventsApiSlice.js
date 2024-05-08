import { EVENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getEvents: builder.query({
            query: ()=>({
                url: EVENTS_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetEventsQuery } = eventsApiSlice; 