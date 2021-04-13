import React from 'react';
import Button from './Button';
import Filter from './Filter';

function Main({
  contents,
  handleClick,
  filterData,
  btnClicked,
  handleDelete,
  handleClear,
}) {
  return (
    <main className='relative'>
      <section className='bg-color5 bg-mainBg h-40 w-full bg-cover md:bg-mainDeskBg'></section>

      {btnClicked && (
        <Filter
          filterData={filterData}
          handleDelete={handleDelete}
          handleClear={handleClear}
        />
      )}

      <section
        className={`space-y-14 ${
          btnClicked ? 'mt-12' : 'mt-16'
        }  mb-12 mx-auto lg:space-y-8`} //md:mt-28
      >
        {contents.map(content => (
          <div
            key={content.id}
            className={`${
              content.new && content.featured ? 'border-l-5 border-color5' : ''
            } relative w-11/12 mx-auto bg-white max-w-xl rounded-md px-5 pt-10 
            pb-5 shadow-lg space-y-3 lg:space-y-0 
            lg:flex lg:justify-between lg:pl-10 lg:max-w-7xl lg:pt-5`}
          >
            <div className='lg:flex'>
              <div className='mr-6 lg:mr-12 lg:flex lg:items-center lg:my-auto'>
                <img
                  className='absolute top-0 transform -translate-y-2/4 
                  lg:-translate-y-0 w-16 lg:static lg:scale-130'
                  src={content.logo}
                  alt={`${content.company} logo`}
                />
              </div>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <p className='text-color5 font-bold mr-5'>
                    {content.company}
                  </p>
                  {content.new && (
                    <p className='bg-color5 text-white text-xs font-semibold uppercase rounded-xl leading-none px-2 pt-2 pb-1'>
                      New!
                    </p>
                  )}
                  {content.featured && (
                    <p className='bg-color4 text-white text-xs font-semibold uppercase rounded-xl leading-none px-2 pt-2 pb-1 ml-2'>
                      Featured
                    </p>
                  )}
                </div>

                <h3 className='font-bold cursor-pointer text-lg transition-colors hover:text-color5'>
                  {content.position}
                </h3>

                <div className='flex text-color3 space-x-2 border-b pb-3 lg:border-0'>
                  <li className='list-none'>{content.postedAt}</li>
                  <li>{content.contract}</li>
                  <li>{content.location}</li>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap  mt-4 md:mt-0 md:flex-nowrap md:items-center'>
              <Button handleClick={handleClick}>{content.role}</Button>
              <Button handleClick={handleClick}>{content.level}</Button>
              {content.languages.map((language, i) => (
                <Button key={i} handleClick={handleClick}>
                  {language}
                </Button>
              ))}
              {content.tools.map((tool, i) => (
                <Button key={i} handleClick={handleClick}>
                  {tool}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <p className='font-semibold text-center'>
        Challenge by{' '}
        <a className='text-color5' href='www.frontendmentor.io'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a className='text-color5' href='www.jomefavourite.github.io/linktree'>
          Favourite
        </a>
      </p>
    </main>
  );
}

export default Main;
