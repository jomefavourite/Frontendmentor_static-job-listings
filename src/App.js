import React, {useState} from 'react';
import Main from './components/Main';
import {data} from './data';

const App = () => {
  const [contents, setContents] = useState([...data]);
  const [filterData, setFilterData] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);

  const handleClick = clicked => {
    setFilterData(filterData => {
      return [...filterData, clicked];
    });

    setContents(
      contents.filter(
        content =>
          content.role.includes(clicked) ||
          content.level.includes(clicked) ||
          content.languages.includes(clicked) ||
          content.tools.includes(clicked)
      )
    );

    setBtnClicked(true);
  };

  const handleDelete = clicked => {
    setFilterData(
      filterData.filter(item => {
        return item !== clicked;
      })
    );

    const filterContents = clickedItem => {
      return [...data].filter(
        content =>
          !content.role.includes(clickedItem) ||
          !content.level.includes(clickedItem) ||
          !content.languages.includes(clickedItem) ||
          !content.tools.includes(clickedItem)
      );
    };

    let newContents = filterContents(clicked);

    setContents(
      newContents.filter(
        content =>
          content.role.includes(
            filterData[0] || filterData[1] || filterData[2] || filterData[3]
          ) ||
          content.level.includes(
            filterData[0] || filterData[1] || filterData[2] || filterData[3]
          ) ||
          content.languages.includes(
            filterData[0] || filterData[1] || filterData[2] || filterData[3]
          ) ||
          content.tools.includes(
            filterData[0] || filterData[1] || filterData[2] || filterData[3]
          )
      )
    );

    if (filterData[0] === clicked) {
      setContents([...data]);
    }
  };

  const handleClear = () => {
    setContents([...data]);
    setFilterData([]);
    setBtnClicked(false);
  };

  return (
    <>
      <Main
        contents={contents}
        handleClick={handleClick}
        filterData={filterData}
        btnClicked={btnClicked}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
    </>
  );
};

export default App;
