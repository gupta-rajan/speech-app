import { RESEARCH_URL } from "../constants"; 
import { apiSlice } from "./apiSlice"; 

export const researchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to fetch all research data
    getAllResearch: builder.query({
      query: () => ({
        url: RESEARCH_URL, // Base endpoint for all research
      }),
      keepUnusedDataFor: 5,
    }),

    // Endpoint to fetch a specific research item by ID
    getResearchById: builder.query({
      query: (id) => ({
        url: `${RESEARCH_URL}/${id}`, // Dynamic endpoint for specific research
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Export hooks for use in components
export const { useGetAllResearchQuery, useGetResearchByIdQuery } = researchApiSlice;