import React from 'react';
import deleteIcon from '../images/icon-remove.svg';

const Filter = ({filterData, handleDelete, handleClear}) => {
  // Making sure there's no repeated value in the array
  let filteredArr = filterData.length
    ? filterData.filter((item, index, self) => self.indexOf(item) === index)
    : [];

  return (
    <>
      {filteredArr.length ? (
        <section
          className='
          w-11/12 transform -translate-y-6 left-0 right-0 bg-white 
          p-5 mx-auto shadow-lg rounded-md max-w-xl lg:max-w-7xl'
        >
          <div className='flex justify-between'>
            <div className='flex flex-wrap gap-5'>
              {filteredArr.map((data, i) => (
                <div
                  key={i}
                  className='flex justify-between items-center pl-2 bg-color1 rounded-md overflow-hidden text-color5 font-semibold'
                >
                  {data}
                  <button
                    onClick={e =>
                      handleDelete(e.target.parentElement.childNodes[0].data)
                    }
                    className='block h-full bg-color5 p-2 ml-2 transition-colors hover:bg-color4'
                  >
                    <img
                      src={deleteIcon}
                      alt='delete icon'
                      className='pointer-events-none'
                    />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleClear}
              className='text-color3 font-semibold p-2 transition-all hover:underline hover:text-color5'
            >
              Clear
            </button>
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default Filter;
