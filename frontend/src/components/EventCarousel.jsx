import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image, Spinner } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetEventsQuery } from '../slices/eventsApiSlice';

const EventCarousel = () => {
    const { data: events, isLoading, error } = useGetEventsQuery();
    const [imagesLoaded, setImagesLoaded] = useState({});

    useEffect(() => {
        if (events) {
            const initialLoadState = {};
            events.forEach(event => {
                initialLoadState[event._id] = event.images.map(() => false);
            });
            setImagesLoaded(initialLoadState);
        }
    }, [events]);

    const handleImageLoad = (eventId, imageIndex) => {
        setImagesLoaded(prevState => {
            const updatedLoadState = { ...prevState };
            updatedLoadState[eventId][imageIndex] = true;
            return updatedLoadState;
        });
    };

    return isLoading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            {events.map(event => (
                event.images && event.images.length > 0 && (
                    <div key={event._id} className='mb-4'>
                        <h2 className='text-center'>{event.name}</h2>
                        <Carousel pause='hover' className='bg-primary carousel-custom'>
                            {event.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <Link to={event.website}>
                                        <div className='carousel-image-wrapper'>
                                            {!imagesLoaded[event._id] || !imagesLoaded[event._id][index] ? (
                                                <div className="image-placeholder">
                                                    <Spinner animation="border" variant="primary" />
                                                    <Image
                                                        src={image}
                                                        alt={`${event.name} Image ${index}`}
                                                        onLoad={() => handleImageLoad(event._id, index)}
                                                        style={{ display: 'none' }}
                                                    />
                                                </div>
                                            ) : (
                                                <Image
                                                    src={image}
                                                    alt={`${event.name} Image ${index}`}
                                                    className='carousel-image'
                                                />
                                            )}
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