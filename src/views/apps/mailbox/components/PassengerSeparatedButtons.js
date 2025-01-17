import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const PassengerSeparatedButtons = ({ label, value = 0, setValue }) => {
  const onInput = (event) => {
    setValue(event.target.value || 0);
  };

  const spinUp = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) + 1);
  };

  const spinDown = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) - 1);
  };

  return (
    <InputGroup className="spinner form-floating mx-1">
      <Form.Control value={value} onInput={onInput} placeholder={label} />
      <Form.Label>{label}</Form.Label>
      <InputGroup.Text id="basic-addon1">
        <button type="button" className="spin-up" onClick={spinUp}>
          <span className="arrow" />
        </button>
        <button type="button" className="spin-down" onClick={spinDown}>
          <span className="arrow" />
        </button>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default PassengerSeparatedButtons;
