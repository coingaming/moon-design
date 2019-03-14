/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { container } from '../../components/container';
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
} from '../../components/layout';
import { CashierHeading } from './dumb-components/heading';
import { NeedHelpBanner } from './dumb-components/need-help-banner';

export const ExchangeView = () => (
  <div css={container}>
    <Layout asideWidth={390}>
      <LayoutHeader>
        <CashierHeading />
      </LayoutHeader>
      <LayoutMain>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
        varius feli..
      </LayoutMain>
      <LayoutAside>
        <NeedHelpBanner />
      </LayoutAside>
    </Layout>
  </div>
);
