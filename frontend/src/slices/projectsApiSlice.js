import { PROJECTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const projectsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getProjects: builder.query({
            query: ()=>({
                url: PROJECTS_URL,
            }),
            keepUnusedDataFor: 5
        })
    }),
});

export const { useGetProjectsQuery } = projectsApiSlice; 