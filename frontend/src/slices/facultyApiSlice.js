import { FACULTY_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const facultyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getFaculty: builder.query({
            query: ()=>({
                url: FACULTY_URL,
            }),
            providesTags: ['Faculty'],
            keepUnusedDataFor: 5,
        }),
        getFacultyById: builder.query({
            query: (facultyId) => ({
                url: `${FACULTY_URL}/${facultyId}`,
            }),
            providesTags: ['Faculty'],
        }),
        createFaculty: builder.mutation({
            query: ()=>({
                url: FACULTY_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Faculty'],
        }),
        updateFaculty: builder.mutation({
            query:(data)=>({
                url: `${FACULTY_URL}/${data.facultyId}`, // Make sure to use data.facultyId
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Faculty'],
        }),
        uploadFacultyImage: builder.mutation({
            query:(data)=>({
                url: `${UPLOADS_URL}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Faculty'],
        }),
        deleteFaculty: builder.mutation({
            query:(facultyId)=>({
                url: `${FACULTY_URL}/${facultyId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetFacultyQuery , useCreateFacultyMutation , useUpdateFacultyMutation, useGetFacultyByIdQuery, useUploadFacultyImageMutation, useDeleteFacultyMutation } = facultyApiSlice;
