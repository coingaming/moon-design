import Pagination from '@heathmont/moon-base-tw/lib/pagination/Pagination';

export const Default = () => (
  <Pagination>
    <Pagination.PrevButton>Previous</Pagination.PrevButton>
    <Pagination.Pages currentPage={5} totalPages={11} />
    <Pagination.NextButton>Next</Pagination.NextButton>
  </Pagination>
);
