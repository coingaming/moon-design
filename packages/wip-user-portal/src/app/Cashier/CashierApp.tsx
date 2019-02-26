/** @jsx jsx */ jsx;
import { Fragment } from 'react';
import { Global, css, jsx } from '@emotion/core';
import { styles } from '@heathmont/sportsbet-global';
import {
  Heading,
  Banner,
  Button,
  BannerToggle,
} from '@heathmont/sportsbet-components';
import { Layout, LayoutHeader, LayoutMain, LayoutAside } from './Layout';
import { container } from './Container';

const NeedHelpBanner = () => (
  <Banner>
    <Heading size="foxtrot" element="h2">
      Need help?
    </Heading>
    <p>
      If you require any assistance our 24/7 live chat support is here to help
    </p>
    <Button fullWidth modifier="secondary">
      Contact Us
    </Button>
    <BannerToggle
      onClick={() => {
        console.log('Closed');
      }}
    />
  </Banner>
);

const CashierHeading = () => (
  <Heading size="foxtrot" element="h1">
    Cashier Heading
  </Heading>
);

export const CashierApp = () => (
  <Fragment>
    <Global styles={styles} />
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
  </Fragment>
);
