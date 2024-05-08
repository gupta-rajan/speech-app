import { Row, Col } from 'react-bootstrap';
import Event from '../components/Event';
import { useGetEventsQuery } from '../slices/eventsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const EventsScreen = () => {
  const {data: events,isLoading,error} = useGetEventsQuery();

  return (
    <>
      {isLoading? (
        <Loader />
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (<>
        <div className="my-4">
          <h1 className="text-center mb-4">Events</h1>
          <Row>
            {events.map((event) => (
              <Col key={event._id} lg={12}>
                <Event event={event} />
              </Col>
            ))}
          </Row>
        </div>
      </>)}
    </>
  );
};

export default EventsScreen;
