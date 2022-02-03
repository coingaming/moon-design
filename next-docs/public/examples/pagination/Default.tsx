import React from 'react';
import { Pagination } from '@heathmont/moon-pagination';

const Example = () => (
  <Pagination
    pageCount={20}
    pageRangeDisplayed={3}
    marginPagesDisplayed={1}
    pageNumber={10}
    previousButtonLabel="Previous"
    nextButtonLabel="Next"
    onChange={(value: React.ChangeEvent) => console.log('pageNumber: ', value)}
  />
);

export default Example;
