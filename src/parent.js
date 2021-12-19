import React from 'react';
import Child from './child';

const Parent = (props) => {
  return <div> {<Child name='Ajeethkumar' age='22' />}</div>;
};

export default Parent;
