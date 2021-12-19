import React from 'react';

const Child = (props) => {
  const handleChange = (e) => {
    props.pv(e.target.value);
  };
  return (
    <>
      <input
        className='text-center  max-w-min mx-auto text-2xl font-medium hover:text-white text-blue-400 bg-green-100 p-1 px-2 rounded-md hover:bg-green-400 hover:shadow-lg hover:shadow-green-500 outline-none border-x-green-600 '
        onChange={handleChange}
      />
    </>
  );
};

export default Child;
