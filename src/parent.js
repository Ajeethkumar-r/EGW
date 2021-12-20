import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import Child from './child';

const Parent = (props) => {
  const [newValue, setNewValue] = useState(0);
  const [reset, setReset] = useState(0);
  const clickHandler = () => {
    setNewValue(newValue + 1);
  };
  const resetHandler = () => {
    setReset(0);
    setNewValue(reset);
  };
  return (
    <div className='flex space-x-5 '>
      <div>
        {<Child onClick={clickHandler} rh={resetHandler} nv={newValue} />}
      </div>
      {/* <div className='text-2xl p-1 font-medium text-white bg-indigo-800 px-2 rounded-md text-center '>
        {' '}
        {newValue}{' '}
      </div> */}
    </div>
  );
};

export default Parent;
