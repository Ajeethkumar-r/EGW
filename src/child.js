import React from 'react';

const Child = ({ onClick, nv, rh }) => {
  return (
    <div className='space-y-8 mx-auto'>
      <button
        className='text-center  max-w-min mx-auto text-2xl font-medium hover:text-white text-blue-400 bg-green-100 p-1 px-2 rounded-md hover:bg-green-400 hover:shadow-lg hover:shadow-green-500 outline-none border-x-green-600 '
        onClick={onClick}
      >
        Button {nv}
      </button>
      <div
        className='text-center  max-w-min mx-auto text-2xl font-medium text-white  bg-red-500 p-1 px-2 rounded-md hover:bg-red-600 hover:shadow-lg hover:shadow-red-500 outline-none border-x-red-600'
        onClick={rh}
      >
        Reset
      </div>
    </div>
  );
};

export default Child;
