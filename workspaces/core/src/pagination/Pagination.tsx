import React from 'react';
import ReactPaginate from 'react-paginate';
import ChevronLeft from './private/icons/ChevronLeft';
import ChevronRight from './private/icons/ChevronRight';
import { PaginationProps } from './private/types/PaginationTypes';

const Pagination: React.FC<PaginationProps> = ({
  onChange,
  previousButtonLabel,
  nextButtonLabel,
  pageNumber,
  goToPageSection,
  changePageSizeSection,
  pageSizeSection,
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  className = ""
}) => {
  const renderPreviousLabel = () => {
    if(typeof previousButtonLabel === "string") {
      return (
        <div>
          <span className="hidden sm:flex">{previousButtonLabel}</span>
          <div className="sm:hidden h-8 w-8 flex items-center justify-center border border-trunks rounded-lg">
            <ChevronLeft width={24} height={24} />
          </div>
        </div>
      )
    }
    return previousButtonLabel;
  };

  const renderNextLabel = () => {
    if(typeof nextButtonLabel === "string") {
      return (
        <div>
          <span className="hidden sm:flex">{nextButtonLabel}</span>
          <div className="sm:hidden h-8 w-8 flex items-center justify-center border border-trunks rounded-lg">
            <ChevronRight width={24} height={24} />
          </div>
        </div>
      )
    } 
    return nextButtonLabel;
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
        {!!pageSizeSection && (
          <div className='m-2.5'> {pageSizeSection} </div>
        )}
        <div className="flex flex-column flex-wrap items-center justify-center md:flex-row">
          <ReactPaginate 
            forcePage={pageNumber - 1}
            previousLabel={renderPreviousLabel()}
            nextLabel={renderNextLabel()}
            onPageChange={({ selected }) => onChange(selected + 1)}
            disableInitialCallback
            pageCount={pageCount}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            containerClassName={`m-2.5 flex-wrap md:flex-nowrap list-none flex items-center justify-center ${className}`}
            pageClassName="group my-0 mx-0.5 rounded-lg hover:text-piccolo hover:bg-piccolo/[.12]"
            pageLinkClassName="flex items-center justify-center cursor-pointer h-8 w-8 group-selected:outline-none"
            previousClassName={`my-2.5 text-center mr-9 text-trunks ${pageNumber === 1 && "cursor-default"}`}
            nextClassName={`my-2.5 text-center ml-9 text-trunks ${pageNumber === pageCount && "cursor-default"}`}
            activeClassName="bg-piccolo text-goten hover:bg-piccolo hover:text-goten"
            breakClassName="my-0 mx-0.5"
            breakLinkClassName="flex items-center justify-center h-8 w-8"
          />
          {!!changePageSizeSection && (
            <div className='m-2.5'> {changePageSizeSection} </div>
          )}
        </div>
      {!!goToPageSection && (
        <div className='m-2.5'> {goToPageSection} </div>
      )}
    </div>
  );
};
        
       
     
      

export default Pagination;
