import EventCarousel from '../components/EventCarousel';
import { useGetEventsQuery } from '../slices/eventsApiSlice';

const GalleryScreen = () => {
  const { data: events, isLoading, error } = useGetEventsQuery();

  return (
    <>
        <EventCarousel />
    </>
  );
};

export default GalleryScreen;
