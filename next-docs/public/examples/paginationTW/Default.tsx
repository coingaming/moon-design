import { useState } from 'react';
import { Pagination } from '@heathmont/moon-core-tw';

const Example = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const onChange = (page: number) => {
    setPageNumber(page);
    console.log('pageNumber: ', page);
  };
  return (
    <Pagination
      pageCount={40}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageNumber={pageNumber}
      previousButtonLabel="Previous"
      nextButtonLabel="Next"
      onChange={onChange}
    />
  );
};

export default Example;
