import React from 'react';
import '../styles/globals.css';
import '../styles/themes.css';
import 'prismjs/themes/prism-okaidia.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moon Design System',
  description: 'Moon Design System',
  manifest: '/favs/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: [
      { url: '/favs/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favs/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favs/favicon.ico',
    apple: { url: '/favs/apple-touch-icon.png', sizes: '180x180' },
    other: [
      {
        rel: 'mask-icon',
        url: '/favs/safari-pinned-tab.svg',
      },
    ],
  },
};

function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="theme-moon-light">
        <div className="layout bg-goku text-bulma flex">{children} </div>
      </body>
    </html>
  );
}
export default MyApp;
