import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { BsAirplaneEnginesFill } from 'react-icons/bs';
import { setViewingMail, toggleSelectMail } from '../mailboxSlice';
import EmailListItem from './EmailListItem';
import FlightCard from './FlightCard';
import PassengerForm from './PassengerForm';

const EmailList = ({ items }) => {
  const dispatch = useDispatch();
  const { selectedItems } = useSelector((state) => state.mailbox);
  const toggleItem = (clickedMail) => {
    dispatch(toggleSelectMail(clickedMail));
  };
  const openMail = (mail) => {
    dispatch(setViewingMail(mail));
  };

  console.log(items);
  return (
    // <div id="flightListContainer">
    <Card>
      <Card.Header as="h5" className="">
        <BsAirplaneEnginesFill /> پرواز ها
      </Card.Header>
      <Card.Body>
        <FlightCard flightData={items} />
      </Card.Body>
    </Card>
    // </div>
  );
};
export default EmailList;
