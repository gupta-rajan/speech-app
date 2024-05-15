import { STUDENTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const studentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => ({
                url: STUDENTS_URL,
            }),
            providesTags: ['Students'],
            keepUnusedDataFor: 5,
        }),
        getStudentById: builder.query({
            query: (studentId) => ({
                url: `${STUDENTS_URL}/${studentId}`,
            }),
            providesTags: ['Students'],
        }),
        createStudent: builder.mutation({
            query: () => ({
                url: STUDENTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Students'],
        }),
        updateStudent: builder.mutation({
            query: (data) => ({
                url: `${STUDENTS_URL}/${data.studentId}`, // Ensure to use data.studentId
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Students'],
        }),
        uploadStudentImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOADS_URL}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Students'],
        }),
        deleteStudent: builder.mutation({
            query: (studentId) => ({
                url: `${STUDENTS_URL}/${studentId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Students'],
        }),
    }),
});

export const { 
    useGetStudentsQuery, 
    useGetStudentByIdQuery, 
    useCreateStudentMutation, 
    useUpdateStudentMutation, 
    useUploadStudentImageMutation, 
    useDeleteStudentMutation 
} = studentsApiSlice;
