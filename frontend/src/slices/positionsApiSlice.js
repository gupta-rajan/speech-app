import { POSITIONS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const positionsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPositions: builder.query({
            query: () => ({
                url: POSITIONS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getPositionById: builder.query({
            query: (id) => ({
                url: `${POSITIONS_URL}/${id}`,
            }),
            providesTags: ['Position'],
            keepUnusedDataFor: 5,
        }),
        createPosition: builder.mutation({
            query: (newPosition) => ({
                url: POSITIONS_URL,
                method: 'POST',
                body: newPosition,
            }),
            invalidatesTags: ['Position'],
        }),
        updatePosition: builder.mutation({
            query: ({ id, ...updatedPosition }) => ({
                url: `${POSITIONS_URL}/${id}`,
                method: 'PUT',
                body: updatedPosition,
            }),
            invalidatesTags: ['Position'],
        }),
        deletePosition: builder.mutation({
            query: (id) => ({
                url: `${POSITIONS_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Position'],
        }),
    }),
});

export const {
    useGetPositionsQuery,
    useGetPositionByIdQuery,
    useCreatePositionMutation,
    useUpdatePositionMutation,
    useDeletePositionMutation,
} = positionsApiSlice;