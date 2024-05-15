import { EVENTS_URL} from "../constants";
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
      query: (eventId) => ({
        url: `${EVENTS_URL}/${eventId}`,
      }),
      providesTags: ['Event'],
    }),
    createEvent: builder.mutation({
      query: () => ({
        url: EVENTS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Event'],
    }),
    updateEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/${data.eventId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Event'],
    }),
    deleteEvent: builder.mutation({
      query: (eventId) => ({
        url: `${EVENTS_URL}/${eventId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Event'],
    }),
  }),
});

export const { useGetEventsQuery, useCreateEventMutation, useUpdateEventMutation, useDeleteEventMutation, useGetEventByIdQuery } = eventsApiSlice;