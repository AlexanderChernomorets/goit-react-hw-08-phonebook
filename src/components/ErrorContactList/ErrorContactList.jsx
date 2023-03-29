import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';

export const ErrorContactList = () => {
  return (
    <div>
      <BiErrorAlt color="red" size={40} />
      <p>There is no contact in your contacts list!</p>
    </div>
  );
};
