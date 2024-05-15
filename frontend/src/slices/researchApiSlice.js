import { RESEARCH_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice"; 

export const researchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to fetch all research data
    getAllResearch: builder.query({
      query: () => ({
        url: RESEARCH_URL, // Base endpoint for all research
      }),
      providesTags: ['Research'],
      keepUnusedDataFor: 5,
    }),

    // Endpoint to fetch a specific research item by ID
    getResearchById: builder.query({
      query: (id) => ({
        url: `${RESEARCH_URL}/${id}`, // Dynamic endpoint for specific research
      }),
      keepUnusedDataFor: 5,
    }),
    createResearch: builder.mutation({
      query: ()=>({
          url: RESEARCH_URL,
          method: 'POST',
      }),
      invalidatesTags: ['Research'],
    }),
    updateResearch: builder.mutation({
        query:(data)=>({
            url: `${RESEARCH_URL}/${data.researchId}`, // Make sure to use data.researchId
            method: 'PUT',
            body: data,
        }),
        invalidatesTags: ['Research'],
    }),
    uploadResearchImage: builder.mutation({
        query:(data)=>({
            url: `${UPLOADS_URL}`,
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['Research'],
    }),
    deleteResearch: builder.mutation({
        query:(researchId)=>({
            url: `${RESEARCH_URL}/${researchId}`,
            method: 'DELETE',
        }),
    }),
  }),
});

// Export hooks for use in components
export const { useGetAllResearchQuery,useCreateResearchMutation , useUpdateResearchMutation, useGetResearchByIdQuery, useUploadResearchImageMutation, useDeleteResearchMutation } = researchApiSlice;