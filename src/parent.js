import React, { useState } from 'react';
import Child from './child';

const Parent = (props) => {
  const [newValue, setNewValue] = useState('');
  const callabacks = (childData) => {
    setNewValue(childData);
  };
  return (
    <div className='flex space-x-5 '>
      <div>{<Child pv={callabacks} />}</div>
      <div className='text-2xl p-1 font-medium text-white bg-indigo-800 px-2 rounded-md text-center '>
        {' '}
        {newValue}{' '}
      </div>
    </div>
  );
};

export default Parent;
