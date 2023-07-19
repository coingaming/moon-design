import React from 'react';
import { Pagination } from '@heathmont/moon-base-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';
import NextLink from 'next/link';

const ServerDoc: React.FC = () => {
  const hrefs = [
    '/serverdoc',
    '/vision',
    '/gettingStarted',
    '/howToContribute',
    '/vision',
    '/gettingStarted',
    '/howToContribute',
    '/serverdoc',
    '/vision',
    '/gettingStarted',
    '/howToContribute',
    '/vision',
    '/gettingStarted',
    '/howToContribute',
  ];
  return (
    <div className="flex bg-goku p-36">
      <Pagination data-id="kmgrekgmer">
        <Pagination.PrevButton>
          <ControlsChevronLeftSmall className="rtl:rotate-180" />
        </Pagination.PrevButton>
        <Pagination.Pages
          currentPage={9}
          totalPages={13}
          as={NextLink}
          locale="en"
          hrefsArray={hrefs}
          isTruncable={false}
        />
        <Pagination.NextButton>
          <ControlsChevronRightSmall className="rtl:rotate-180" />
        </Pagination.NextButton>
      </Pagination>
    </div>
  );
};

export default ServerDoc;
