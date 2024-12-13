import React, { useState } from 'react';
import { Card, Col, Row, ListGroup, Badge, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BsArrowBarDown } from 'react-icons/bs';
import PassengerForm from './PassengerForm';

const FlightCard = ({ flightData }) => {
  const { loading } = useSelector((state) => state.mailbox);
  const { outbound, err, status } = flightData || {};
  const [show, setShow] = useState(false);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const AirPlaneSvg = () => {
    return <img src="/img/illustration/airplane.svg" alt="airplane" style={{ width: '50px', height: '50px' }} />;
  };
  // console.log(flightData);
  if (status !== 'success') {
    return (
      <Row>
        <Col>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <AirPlaneSvg />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">هیچ پروازی یافت نشد، مجددا جستجو بفرمایید!</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  const flight = outbound[0]; // Assuming we have only one flight object in the outbound array
  // const flight = {}; // Assuming we have only one flight object in the outbound array

  return (
    <>
      <Card className="mb-4">
        <Card.Header as="h5" className="text-center">
          پرواز {flight?.flight_details.airline_name} ({flight?.flight_details.flight_number})
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>قیمت:</strong> {flight?.price.toLocaleString()} {flight?.currency_code}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>ظرفیت:</strong> {flight?.capacity} نفر
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>نوع پرواز:</strong> {flight?.flight_type}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>مدت زمان پرواز:</strong> {flight?.duration}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>فرودگاه مبداء:</strong> {flight?.departure.airport_name_fa} ({flight?.departure.city_name_fa})
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>فرودگاه مقصد:</strong> {flight?.arrival.airport_name_fa} ({flight?.arrival.city_name_fa})
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>تاریخ و زمان حرکت:</strong> {flight?.departure.date} {flight?.departure.time}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>تاریخ و زمان رسیدن:</strong> {flight?.arrival.date} {flight?.arrival.time}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>کلاس پروازی:</strong> {flight?.flight_details.class}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>نوع هواپیما:</strong> {flight?.flight_details.airplane}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>هواپیمایی:</strong> {flight?.flight_details.airline_name_en}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>بار مجاز:</strong> {flight?.baggages[0].Quantity} {flight?.baggages[0].Unit}
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <strong>شماره پرواز</strong> {JSON.stringify(flight?.ref_number)}
                </ListGroup.Item> */}
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button onClick={() => setShow(true)} variant="primary" size="lg">
            رزرو پرواز <BsArrowBarDown />
          </Button>
          <div className="text-end">
            <PassengerForm show={show} setShow={setShow} flightData={flight} />
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default FlightCard;
