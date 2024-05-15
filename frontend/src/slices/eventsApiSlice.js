// eventsApiSlice.js
import { EVENTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => ({
                url: EVENTS_URL,
            }),
            providesTags: ['Event'],
            keepUnusedDataFor: 5,
        }),
        getEventById: builder.query({
            query: (id) => ({
                url: `${EVENTS_URL}/${id}`,
            }),
            providesTags: ['Event'],
            keepUnusedDataFor: 5,
        }),
        createEvent: builder.mutation({
            query: (newEvent) => ({
                url: EVENTS_URL,
                method: 'POST',
                body: newEvent,
            }),
            invalidatesTags: ['Event'],
        }),
        updateEvent: builder.mutation({
            query: ({ id, ...updatedEvent }) => ({
                url: `${EVENTS_URL}/${id}`,
                method: 'PUT',
                body: updatedEvent,
            }),
            invalidatesTags: ['Event'],
        }),
        deleteEvent: builder.mutation({
            query: (id) => ({
                url: `${EVENTS_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Event'],
        }),
    }),
});

export const {
    useGetEventsQuery,
    useGetEventByIdQuery,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation,
} = eventsApiSlice;