import { PROJECTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const projectsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => ({
                url: PROJECTS_URL,
            }),
            providesTags: ['Project'],
            keepUnusedDataFor: 5,
        }),
        getProjectById: builder.query({
            query: (id) => ({
                url: `${PROJECTS_URL}/${id}`,
            }),
            providesTags: ['Project'],
            keepUnusedDataFor: 5,
        }),
        createProject: builder.mutation({
            query: (newProject) => ({
                url: PROJECTS_URL,
                method: 'POST',
                body: newProject,
            }),
            invalidatesTags: ['Project'],
        }),
        updateProject: builder.mutation({
            query: ({ id, ...updatedProject }) => ({
                url: `${PROJECTS_URL}/${id}`,
                method: 'PUT',
                body: updatedProject,
            }),
            invalidatesTags: ['Project'],
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `${PROJECTS_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Project'],
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useGetProjectByIdQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectsApiSlice;