import React, { useState } from 'react';
import { Button, Card, Col, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { BsBusFrontFill, BsCarFrontFill, BsFillAirplaneFill, BsFillHousesFill, BsFillTrainFreightFrontFill, BsSearch } from 'react-icons/bs';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import SelectAirport from './SelectAirport';
import SelectDate from './SelectDate';
import { getFlights } from '../mailboxSlice';
import PassengerSeparatedButtons from './PassengerSeparatedButtons';

const SearchTravel = () => {
  const TravelTypes = [
    { name: 'Flight', icon: <BsFillAirplaneFill />, active: true },
    { name: 'Train', icon: <BsFillTrainFreightFrontFill />, active: false },
    { name: 'Bus', icon: <BsBusFrontFill />, active: false },
    { name: 'Car', icon: <BsCarFrontFill />, active: false },
    { name: 'Hotel', icon: <BsFillHousesFill />, active: false },
  ];

  const { formatMessage: f } = useIntl();
  const [searchType, setSearchType] = useState('Flight');
  const dispatch = useDispatch();
  /* flightState object needs : {
  "outbound": {
    "date": "2024-09-28",
    "departure": "MHD",
    "arrival": "THR"
  },
  "return": {
    "date": "2024-09-29",
    "departure": "THR",
    "arrival": "MHD"
  },
  "adult": "2",
  "child": "0",
  "inf": "0"
}
  */

  const [flightState, setFlightState] = useState({
    type: 'Flight',
    outbound: {
      date: '2024-12-14',
      departure: 'THR',
      arrival: 'MHD',
    },
    // return: {
    //   date: '2024-09-29',
    //   departure: 'THR',
    //   arrival: 'MHD',
    // },
    adult: 0,
    child: 0,
    inf: 0,
  });

  const TravelTypesElement = () => {
    return TravelTypes.map((item, index) => {
      return (
        <Col className="col-sm-auto col-12" key={index}>
          <a disabled={!item.active}>
            <Card
              className={`mb-3 text-center cursor-pointer ${searchType === item.name && 'active font-weight-bold'} ${
                item.active && 'hover-border-primary'
              } transition ease-in-out`}
            >
              <Card.Body>
                <div className={`mb-2 px-4 text-large text-${item.active ? 'body' : 'muted'}`}>{item.icon}</div>

                <div className={`text-${item.active ? 'body' : 'muted'}`}>{f({ id: item.name })}</div>
              </Card.Body>
            </Card>
          </a>
        </Col>
      );
    });
  };
  const ChangeFlightType = (type) => {
    setFlightState({ ...flightState });
  };
  const FlightTypeElemnt = () => {
    return (
      <ToggleButtonGroup type="radio" className="d-block" name="buttonOptions1">
        <ToggleButton
          className="mx-1"
          onClick={() => ChangeFlightType('One-Way')}
          id="tbg-radio-1"
          value="One-Way"
          variant={!flightState?.return ? 'primary' : 'light'}
        >
          {f({ id: 'One-Way' })}
        </ToggleButton>
        <ToggleButton
          className="mx-1"
          disabled
          onClick={() => ChangeFlightType('Two-Way')}
          id="tbg-radio-2"
          value="Two-Way"
          variant={flightState?.return ? 'primary' : 'light'}
        >
          {f({ id: 'Two-Way' })}
        </ToggleButton>
      </ToggleButtonGroup>
    );
  };
  /** increase and decrease button for passengers */
  const SelectPassengers = () => {
    return (
      <div className="d-flex">
        <PassengerSeparatedButtons
          label={f({ id: 'Adults' })}
          value={flightState.adult}
          setValue={(value) => setFlightState({ ...flightState, adult: value })}
        />
        <PassengerSeparatedButtons
          label={f({ id: 'Children' })}
          value={flightState.child}
          setValue={(value) => setFlightState({ ...flightState, child: value })}
        />
        <PassengerSeparatedButtons label={f({ id: 'Infants' })} value={flightState.inf} setValue={(value) => setFlightState({ ...flightState, inf: value })} />
      </div>
      // <ToggleButtonGroup type="radio" className="mb-2 d-block" name="buttonOptions1">
      //   <ToggleButton id="tbg-radio-1" value={1} variant="primary">
      //     {f({ id: 'Adult' })}

      //     <span className="ms-2">{flightState.adult}</span>
      //   </ToggleButton>
      //   <ToggleButton id="tbg-radio-2" value={2} variant="secondary">
      //     {f({ id: 'Child' })}
      //   </ToggleButton>
      //   <ToggleButton id="tbg-radio-3" value={3} variant="secondary">
      //     {f({ id: 'Infant' })}
      //   </ToggleButton>
      // </ToggleButtonGroup>
    );
  };
  const TravelFieldsElement = () => {
    return (
      <>
        <Col className="col-auto d-flex align-items-center justify-content-center">
          <FlightTypeElemnt />
        </Col>
        <Col className="">
          <SelectAirport
            value={flightState.outbound.departure}
            setValue={(airport) => setFlightState({ ...flightState, outbound: { ...flightState.outbound, departure: airport.value } })}
            ControlLabel={f({ id: 'Departure' })}
          />
        </Col>
        <Col>
          <SelectAirport
            value={flightState.outbound.arrival}
            setValue={(airport) => setFlightState({ ...flightState, outbound: { ...flightState.outbound, arrival: airport.value } })}
            ControlLabel={f({ id: 'Arrival' })}
          />
        </Col>
        <Col className="col-auto ">
          <SelectDate
            startDate={new Date(flightState.outbound.date) || new Date()}
            setStartDate={(date) => setFlightState({ ...flightState, outbound: { ...flightState.outbound, date } })}
            ControlLabel={f({ id: 'Departure Date' })}
          />
        </Col>
        {/* {flightState.type === 'Two-Way' && (
          <Col>
            <SelectDate ControlLabel={f({ id: 'Arrival Date' })} />{' '}
          </Col>
        )} */}

        <Col className="col-auto ">
          <SelectPassengers />
        </Col>
        <Col className="col-auto d-flex align-items-center justify-content-center">
          <Button
            onClick={() => {
              dispatch(getFlights({ flightSearchData: flightState }));
            }}
            variant="primary"
          >
            {f({ id: 'Search' })}
            <BsSearch className="mx-1" />
          </Button>
        </Col>
      </>
    );
  };
  return (
    <Row className="mb-2">
      <Row className="mb-1 d-flex justify-content-center">
        <TravelTypesElement />
      </Row>
      <hr />
      {/* {JSON.stringify(flightState)} */}
      <Row className="d-flex mb-2">
        <TravelFieldsElement />
      </Row>
    </Row>
  );
};

export default SearchTravel;
