import { FACULTY_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const facultyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getFaculty: builder.query({
            query: ()=>({
                url: FACULTY_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetFacultyQuery } = facultyApiSlice; 