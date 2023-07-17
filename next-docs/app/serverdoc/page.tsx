import React from 'react';
import { Pagination, getPageInfo } from '@heathmont/moon-base-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

const ServerDoc: React.FC = () => {
  const page = 11;
  const pageInfo = getPageInfo({ page: 11, totalCount: 3000, pageSize: 30 });
  const {
    isTrancable,
    previousPages,
    nextPages,
    middlePages,
    isMiddleTruncable,
  } = pageInfo;
  return (
    <div className="flex bg-goku p-36">
      <Pagination currentPage={1} totalPages={30}>
        <Pagination.PrevButton>
          <ControlsChevronLeftSmall className="rtl:rotate-180" />
        </Pagination.PrevButton>
        <Pagination.Pages>
          {previousPages?.map((p) => (
            <Pagination.Page as="span" selected={p === page} key={p} page={p}>
              {p}
            </Pagination.Page>
          ))}

          {isTrancable && (
            <Pagination.TruncableElement>...</Pagination.TruncableElement>
          )}

          {middlePages?.map((p) => (
            <Pagination.Page as="span" selected={p === page} key={p} page={p}>
              {p}
            </Pagination.Page>
          ))}

          {isMiddleTruncable && (
            <Pagination.TruncableElement>...</Pagination.TruncableElement>
          )}

          {nextPages?.map((p) => (
            <Pagination.Page as="span" selected={p === page} key={p} page={p}>
              {p}
            </Pagination.Page>
          ))}
        </Pagination.Pages>
        <Pagination.NextButton>
          <ControlsChevronRightSmall className="rtl:rotate-180" />
        </Pagination.NextButton>
      </Pagination>
    </div>
  );
};

export default ServerDoc;
