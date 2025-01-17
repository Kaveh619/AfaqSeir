import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SelectDate = ({ ControlLabel, startDate = new Date(), setStartDate }) => {
  // const [startDate, setStartDate] = useState(null);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="form-floating" onClick={onClick} ref={ref}>
      <input className="form-control" value={value} onChange={() => {}} placeholder={ControlLabel} />
      <label>{ControlLabel}</label>
    </div>
  ));
  CustomInput.displayName = 'CustomInput';
  return <DatePicker className="form-control" customInput={<CustomInput />} selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default SelectDate;
