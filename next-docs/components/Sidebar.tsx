import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import ActiveLink from '../components/activeLink';

export default function Sidebar({ children }) {
  return (
    <div>
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <ActiveLink activeClassName="text-blue-300" href="/">
            <a>Home</a>
          </ActiveLink>{' '}
          |
          <ActiveLink activeClassName="text-blue-300" href="/react/badge">
            <a>Badge</a>
          </ActiveLink>{' '}
          |
          <ActiveLink href="/contact">
            <a>Contact</a>
          </ActiveLink>
        </nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
}
