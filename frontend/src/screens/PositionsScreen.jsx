import { useGetPositionsQuery } from '../slices/positionsApiSlice';
import { Container, Row, Col } from 'react-bootstrap';
import PositionCard from '../components/PositionCard'; // Create PositionCard component for position details
import Loader from '../components/Loader';
import Message from '../components/Message';

const PositionsScreen = () => {
  const {data: positions,isLoading,error} = useGetPositionsQuery();

  return (
    <>
      {isLoading? (
        <Loader />
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (<>
        <Container>
          <h1 className="my-4 text-center">Positions</h1>
          <Row>
            {positions.map((position) => (
              <Col key={position._id} md={12} lg={12}>
                <PositionCard position={position} />
              </Col>
            ))}
          </Row>
        </Container>
      </>)}
    </>
  );
};

export default PositionsScreen;