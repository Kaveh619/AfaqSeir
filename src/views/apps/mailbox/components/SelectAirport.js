import React, { useState } from 'react';
import { BsAirplaneEnginesFill } from 'react-icons/bs';
import Select, { components } from 'react-select';

const SelectAirport = ({ ControlLabel, value, setValue }) => {
  // const [value, setValue] = useState();

  const IranAirPorts = [
    { value: 'THR', label: 'Tehran Mehrabad International Airport' },
    { value: 'MHD', label: 'Mashhad International Airport' },
    { value: 'IFN', label: 'Isfahan International Airport' },
    { value: 'KIH', label: 'Kish International Airport' },
    { value: 'SYZ', label: 'Shiraz International Airport' },
    { value: 'AWZ', label: 'Ahwaz International Airport' },
  ];

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props} className="form-floating">
        {children}
        <label>{ControlLabel}</label>
      </components.Control>
    );
  };
  const formatOptionLabel = ({ label, color }) => (
    <div className='d-flex flex-nowrap'>
      <BsAirplaneEnginesFill className="align-middle d-inline-block lh-1 mx-1" />
      {/* <span className={`align-middle d-inline-block option-circle me-2 rounded-xl border ${color}`} /> */}
      <span className="align-middle d-inline-block lh-1">{label}</span>
    </div>
  );
  return (
    <Select
      classNamePrefix="react-select"
      components={{ Control }}
      formatOptionLabel={formatOptionLabel}
      options={IranAirPorts}
      value={IranAirPorts.filter((option) => option.value === value)}
      onChange={setValue}
      placeholder=""
    />
  );
};

export default SelectAirport;
