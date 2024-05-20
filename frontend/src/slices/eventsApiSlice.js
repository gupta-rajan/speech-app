import { EVENTS_URL, EVENT_UPLOADS_URL } from "../constants"; // Adjust the import as needed
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
            query: () => ({
                url: EVENTS_URL,
                method: 'POST',
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
        uploadEventImage: builder.mutation({
            query: (data) => ({
                url: `${EVENT_UPLOADS_URL}/event-images`, // Updated URL for multiple images
                method: 'POST',
                body: data,
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
    useUploadEventImageMutation,
} = eventsApiSlice;
