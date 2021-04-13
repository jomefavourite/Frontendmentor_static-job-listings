import React from 'react';

function Button({children, handleClick}) {
  return (
    <button
      onClick={() => handleClick(children)}
      className='block bg-color2 p-2 mr-4 mb-2 transition-colors text-color5 font-semibold rounded-md md:h-8 hover:bg-color5 hover:text-white'
    >
      {children}
    </button>
  );
}

export default Button;
