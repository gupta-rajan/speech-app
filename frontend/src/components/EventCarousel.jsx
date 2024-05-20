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
                event.images && event.images.length > 0 && (
                    <div key={event._id} className='mb-4'>
                        <h2 className='text-center'>{event.name}</h2>
                        <Carousel pause='hover' className='bg-primary carousel-custom'>
                            {event.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <Link to={event.website}>
                                        <div className='carousel-image-wrapper'>
                                            <Image src={image} alt={`${event.name} Image ${index}`} className='carousel-image' />
                                        </div>
                                        <Carousel.Caption className='carousel-caption'>
                                            <h2 className='text-white text-right'>
                                                {event.name}
                                            </h2>
                                        </Carousel.Caption>
                                    </Link>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )
            ))}
        </>
    );
};

export default EventCarousel;