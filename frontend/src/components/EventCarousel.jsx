import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetEventsQuery } from '../slices/eventsApiSlice';

const EventCarousel = () => {
    const { data: events, isLoading, error } = useGetEventsQuery();

    return isLoading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            {events.map((event) => (
                <div key={event._id} className='mb-4'>
                    <h2>{event.name}</h2>
                    <Carousel pause='hover' className='bg-primary'>
                        {event.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Link to={`/events/${event._id}`}>
                                    <Image src={image} alt={`${event.name} Image ${index}`} fluid />
                                </Link>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            ))}
        </>
    );
};

export default EventCarousel;