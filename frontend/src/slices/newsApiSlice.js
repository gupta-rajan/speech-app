import { NEWS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getNews: builder.query({
            query: ()=>({
                url: NEWS_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetNewsQuery } = newsApiSlice; 